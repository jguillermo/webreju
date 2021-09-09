import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { AuctionDeletedEvent } from '../../domain/auction-deleted.event';

@EventsHandler(AuctionDeletedEvent)
export class ResourceOnAuctionDeleted implements IEventHandler<AuctionDeletedEvent> {
  //constructor(private commandBus: CommandBus) {}

  handle(event: AuctionDeletedEvent) {
    // logic
    Logger.log(event.eventName());
  }
}
