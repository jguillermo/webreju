import { AuctionDeleteHandler } from './delete/auction-delete.handler';
import { AuctionFindByIdHandler } from './find-by-id/auction-find-by-id.handler';
import { AuctionListHandler } from './list/auction-list.handler';
import { AuctionPersistHandler } from './persist/auction-persist.handler';
import { AuctionDeleteService } from './delete/auction-delete.service';
import { AuctionFindByIdService } from './find-by-id/auction-find-by-id.service';
import { AuctionListService } from './list/auction-list.service';
import { AuctionPersistService } from './persist/auction-persist.service';

export const ApplicationHandlers = [
  AuctionDeleteHandler,
  AuctionFindByIdHandler,
  AuctionListHandler,
  AuctionPersistHandler,
];
export const ApplicationServices = [
  AuctionDeleteService,
  AuctionFindByIdService,
  AuctionListService,
  AuctionPersistService,
];
