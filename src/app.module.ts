import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CqrsModule } from '@nestjs/cqrs';
import { ShareModule } from './share/share.module';
import { AuctionModule } from './auction/auction.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      playground: true,
      debug: true,
    }),
    CqrsModule,
    AuctionModule,
    ShareModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
