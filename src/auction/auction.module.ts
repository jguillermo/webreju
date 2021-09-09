import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AuctionFirestoreRepository } from './infrastructure/persistence/auction-firestore.repository';
import { AuctionRepository } from './domain/auction.repository';
import { ShareModule } from '../share/share.module';
import { AuctionResolver } from './infrastructure/graph-ql/auction.resolver';
import { AppEvents } from './infrastructure/event';
import { ApplicationHandlers, ApplicationServices } from './application';

@Module({
  imports: [CqrsModule, ShareModule],
  providers: [
    {
      provide: AuctionRepository,
      useClass: AuctionFirestoreRepository,
    },
    ...ApplicationHandlers,
    ...ApplicationServices,
    ...AppEvents,
    AuctionResolver,
  ],
})
export class AuctionModule {}
