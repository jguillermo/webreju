import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { AuctionResponse } from '../auction.response';
import { AuctionId } from '../../domain/auction-id';
import { AuctionFindByIdDto } from './auction-find-by-id.dto';
import { AuctionFindByIdService } from './auction-find-by-id.service';

@QueryHandler(AuctionFindByIdDto)
export class AuctionFindByIdHandler implements IQueryHandler<AuctionFindByIdDto> {
  constructor(private service: AuctionFindByIdService) {}

  async execute(dto: AuctionFindByIdDto): Promise<AuctionResponse> {
    const id = new AuctionId(dto.id);

    return await this.service.execute(id);
  }
}
