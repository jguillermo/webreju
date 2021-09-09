import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AuctionE2eModule } from './auction-e2e-module';
import { AuctionRepository } from '../../../src/auction/domain/auction.repository';
import { AuctionMother } from '../auction-object-mother';

describe('GraphQl Auction (auctionDelete)', () => {
  let app: INestApplication;
  let repository: AuctionRepository;
  beforeEach(async () => {
    ({ app, auctionRepository: repository } = await AuctionE2eModule.create());
    const items = await repository.findAll();
    for await (const item of items) {
      await repository.deleteById(item.id);
    }
  });

  it('delete', async () => {
    const auction = AuctionMother.create();
    await repository.persist(auction);
    const query = `
          mutation{
            auctionDelete(id:"${auction.id.value}"){
              status
            }
          }
          `;
    return request(app.getHttpServer())
      .post(`/graphql`)
      .send({ query: query, variables: {} })
      .then(async (response) => {
        expect(response.body).toEqual({
          data: {
            auctionDelete: {
              status: 'ok',
            },
          },
        });
        const auctionDb = await repository.findById(auction.id);
        expect(auctionDb).toBeNull();
        expect(response.statusCode).toEqual(200);
      });
  });

  it('delete not exist item', async () => {
    const auction = AuctionMother.create();
    const query = `
          mutation{
            auctionDelete(id: "${auction.id.value}"){
              status
            }
          }
          `;
    return request(app.getHttpServer())
      .post(`/graphql`)
      .send({ query: query, variables: {} })
      .then(async (response) => {
        expect(response.body).toEqual({
          data: {
            auctionDelete: {
              status: 'ok',
            },
          },
        });
        const auctionDb = await repository.findById(auction.id);
        expect(auctionDb).toBeNull();
        expect(response.statusCode).toEqual(200);
      });
  });
});
