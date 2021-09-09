import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { AuctionCreatedEvent } from '../../domain/auction-created.event';

@EventsHandler(AuctionCreatedEvent)
export class ResourceOnAuctionCreated implements IEventHandler<AuctionCreatedEvent> {
  //constructor(private commandBus: CommandBus) {}

  handle(event: AuctionCreatedEvent) {
    // logic
    Logger.log(event.eventName());
  }
}
