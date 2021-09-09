import { INestApplication } from '@nestjs/common';
import { TestingE2eModule } from '../../testing-e2e-module';
import { AuctionRepository } from '../../../src/auction/domain/auction.repository';

export interface AuctionTestingInterface {
  app: INestApplication;
  auctionRepository: AuctionRepository;
}

export class AuctionE2eModule extends TestingE2eModule {
  static async create(): Promise<AuctionTestingInterface> {
    const module = new AuctionE2eModule();
    await module.init();
    return {
      app: module.app,
      auctionRepository: module.moduleFixture.get<AuctionRepository>(AuctionRepository),
    };
  }
}
