import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { AuctionUpdatedEvent } from '../../domain/auction-updated.event';

@EventsHandler(AuctionUpdatedEvent)
export class ResourceOnAuctionUpdated implements IEventHandler<AuctionUpdatedEvent> {
  //constructor(private commandBus: CommandBus) {}

  handle(event: AuctionUpdatedEvent) {
    // logic
    Logger.log(event.eventName());
  }
}
