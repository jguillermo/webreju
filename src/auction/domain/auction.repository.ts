import { FilterItem, OrderTypeImp, PaginatorTypeImp } from 'base-ddd';
import { Auction } from './auction';
import { AuctionId } from './auction-id';

export abstract class AuctionRepository {
  abstract persist(auction: Auction): Promise<void>;

  abstract findById(id: AuctionId): Promise<Auction | null>;

  abstract findAll(filters?: Array<FilterItem>, paginator?: PaginatorTypeImp, order?: OrderTypeImp): Promise<Auction[]>;

  abstract deleteById(id: AuctionId): Promise<void>;
}
