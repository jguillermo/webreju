import { Injectable } from '@nestjs/common';
import { FilterItem, OrderTypeImp, PaginatorTypeImp } from 'base-ddd';
import { Auction } from '../../domain/auction';
import { AuctionId } from '../../domain/auction-id';
import { AuctionDao } from './auction.dao';
import { AuctionRepository } from '../../domain/auction.repository';
import { FirestoreService } from '../../../share/infrastructure/firestore/firestore.service';

@Injectable()
export class AuctionFirestoreRepository extends AuctionRepository {
  private _collection = 'auctions';

  constructor(private readonly firestore: FirestoreService) {
    super();
  }

  async persist(auction: Auction): Promise<void> {
    const dao = AuctionDao.fromAggregate(auction);
    await this.firestore.persist(this._collection, dao.id, dao.data);
  }

  async findById(id: AuctionId): Promise<Auction | null> {
    const item = await this.firestore.findOneDocumentById(this._collection, id.value);
    if (!item) {
      return null;
    }
    return AuctionDao.fromItem(item).toAggregate();
  }

  async findAll(filters?: Array<FilterItem>, paginator?: PaginatorTypeImp, order?: OrderTypeImp): Promise<Auction[]> {
    if (!Array.isArray(filters)) {
      filters = [];
    }
    if (!paginator) {
      paginator = PaginatorTypeImp.empty();
    }
    if (!order) {
      order = OrderTypeImp.empty();
    }
    const items = await this.firestore.findAll(
      this._collection,
      filters.filter((e) => e.value),
      paginator,
      order,
    );
    return items.map((item) => {
      return AuctionDao.fromItem(item).toAggregate();
    });
  }

  async deleteById(id: AuctionId): Promise<void> {
    await this.firestore.delete(this._collection, id.value);
  }
}
