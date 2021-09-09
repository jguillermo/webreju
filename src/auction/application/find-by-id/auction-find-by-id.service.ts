import { Injectable } from '@nestjs/common';
import { AuctionRepository } from '../../domain/auction.repository';
import { AuctionResponse } from '../auction.response';
import { AuctionId } from '../../domain/auction-id';

@Injectable()
export class AuctionFindByIdService {
  constructor(private repository: AuctionRepository) {}

  public async execute(id: AuctionId): Promise<AuctionResponse | null> {
    const auction = await this.repository.findById(id);
    if (!auction) {
      return null;
    }
    return AuctionResponse.fromAggregate(auction);
  }
}
