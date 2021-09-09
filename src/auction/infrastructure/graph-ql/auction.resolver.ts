import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ResultAuctionPersist, AuctionType } from './auction.type';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ResponseStatus } from '../../../share/application/applicationResponse';
import { StatusType } from '../../../share/app/status.type';
import { AuctionFindByIdDto } from '../../application/find-by-id/auction-find-by-id.dto';
import { AuctionPersistDto } from '../../application/persist/auction-persist.dto';
import { AuctionDeleteDto } from '../../application/delete/auction-delete.dto';
import { AuctionListDto } from '../../application/list/auction-list.dto';
import { AuctionResponse } from '../../application/auction.response';
import { ListAuctionResponse } from '../../application/list-auction.response';

@Resolver(() => AuctionType)
export class AuctionResolver {
  constructor(private commandBus: CommandBus, private queryBus: QueryBus) {}

  @Query(() => [AuctionType], { name: 'auctionList' })
  async list(@Args() args: AuctionListDto): Promise<AuctionResponse[]> {
    const data: ListAuctionResponse = await this.queryBus.execute(args);
    return data.list;
  }

  @Query(() => AuctionType, { name: 'auction', nullable: true })
  async aggregate(@Args() args: AuctionFindByIdDto): Promise<AuctionResponse | null> {
    return await this.queryBus.execute(args);
  }

  @Mutation(() => ResultAuctionPersist, { name: 'auctionPersist' })
  async persist(@Args() args: AuctionPersistDto) {
    await this.commandBus.execute(args);
    return args.showEntity ? await this.queryBus.execute(new AuctionFindByIdDto(args.id)) : ResponseStatus.ok();
  }

  @Mutation(() => StatusType, { name: 'auctionDelete' })
  async delete(@Args() args: AuctionDeleteDto): Promise<ResponseStatus> {
    await this.commandBus.execute(args);
    return ResponseStatus.ok();
  }
}
