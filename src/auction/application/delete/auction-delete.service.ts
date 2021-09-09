import { Injectable } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';
import { AuctionRepository } from '../../domain/auction.repository';
import { AuctionId } from '../../domain/auction-id';

@Injectable()
export class AuctionDeleteService {
  constructor(private repository: AuctionRepository, private eventBus: EventBus) {}

  public async execute(id: AuctionId): Promise<void> {
    const auction = await this.repository.findById(id);
    if (auction) {
      auction.delete();
      await this.repository.deleteById(auction.id);
      this.eventBus.publishAll(auction.pullDomainEvents());
    }
  }
}
