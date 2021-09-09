import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AuctionDeleteService } from './auction-delete.service';
import { AuctionDeleteDto } from './auction-delete.dto';
import { AuctionId } from '../../domain/auction-id';

@CommandHandler(AuctionDeleteDto)
export class AuctionDeleteHandler implements ICommandHandler<AuctionDeleteDto> {
  constructor(private service: AuctionDeleteService) {}

  async execute(dto: AuctionDeleteDto): Promise<void> {
    const id = new AuctionId(dto.id);

    await this.service.execute(id);
  }
}
