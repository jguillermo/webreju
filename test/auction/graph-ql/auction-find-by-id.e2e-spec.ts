import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AuctionE2eModule } from './auction-e2e-module';
import { AuctionRepository } from '../../../src/auction/domain/auction.repository';
import { AuctionMother } from '../auction-object-mother';

describe('GraphQl Auction (auction)', () => {
  let app: INestApplication;
  let repository: AuctionRepository;
  beforeEach(async () => {
    ({ app, auctionRepository: repository } = await AuctionE2eModule.create());
    const items = await repository.findAll();
    for await (const item of items) {
      await repository.deleteById(item.id);
    }
  });

  it('get', async () => {
    const auction = AuctionMother.create();
    await repository.persist(auction);
    const query = `
          query{
            auction(id: "${auction.id.value}"){
              id
              expedient
              judicialDistrict
              district
              province
              department
              fechaResolucion
              description
              convocatoria
              tipoCambio
              tasacion
              precioBase
              incremento
              arancel
              oblaje
              tipoInmueble
              direccion
              cargaGravamen
              porcentaje
              presentacionOferta
            }
          }
          `;
    return request(app.getHttpServer())
      .post(`/graphql`)
      .send({ query: query, variables: {} })
      .then(async (response) => {
        expect(response.body).toEqual({
          data: {
            auction: {
              id: auction.id.value,
              expedient: auction.expedient.value,
              judicialDistrict: auction.judicialDistrict.value,
              district: auction.district.value,
              province: auction.province.value,
              department: auction.department.value,
              fechaResolucion: auction.fechaResolucion.value,
              description: auction.description.value,
              convocatoria: auction.convocatoria.value,
              tipoCambio: auction.tipoCambio.value,
              tasacion: auction.tasacion.value,
              precioBase: auction.precioBase.value,
              incremento: auction.incremento.value,
              arancel: auction.arancel.value,
              oblaje: auction.oblaje.value,
              tipoInmueble: auction.tipoInmueble.value,
              direccion: auction.direccion.value,
              cargaGravamen: auction.cargaGravamen.value,
              porcentaje: auction.porcentaje.value,
              presentacionOferta: auction.presentacionOferta.value,
            },
          },
        });
        const auctionDb = await repository.findById(auction.id);
        expect(auctionDb).not.toBeNull();
        expect(auctionDb.id.value).toEqual(auction.id.value);
        expect(auctionDb.expedient.value).toEqual(auction.expedient.value);
        expect(auctionDb.judicialDistrict.value).toEqual(auction.judicialDistrict.value);
        expect(auctionDb.district.value).toEqual(auction.district.value);
        expect(auctionDb.province.value).toEqual(auction.province.value);
        expect(auctionDb.department.value).toEqual(auction.department.value);
        expect(auctionDb.fechaResolucion.value).toEqual(auction.fechaResolucion.value);
        expect(auctionDb.description.value).toEqual(auction.description.value);
        expect(auctionDb.convocatoria.value).toEqual(auction.convocatoria.value);
        expect(auctionDb.tipoCambio.value).toEqual(auction.tipoCambio.value);
        expect(auctionDb.tasacion.value).toEqual(auction.tasacion.value);
        expect(auctionDb.precioBase.value).toEqual(auction.precioBase.value);
        expect(auctionDb.incremento.value).toEqual(auction.incremento.value);
        expect(auctionDb.arancel.value).toEqual(auction.arancel.value);
        expect(auctionDb.oblaje.value).toEqual(auction.oblaje.value);
        expect(auctionDb.tipoInmueble.value).toEqual(auction.tipoInmueble.value);
        expect(auctionDb.direccion.value).toEqual(auction.direccion.value);
        expect(auctionDb.cargaGravamen.value).toEqual(auction.cargaGravamen.value);
        expect(auctionDb.porcentaje.value).toEqual(auction.porcentaje.value);
        expect(auctionDb.presentacionOferta.value).toEqual(auction.presentacionOferta.value);
        expect(response.statusCode).toEqual(200);
      });
  });

  it('get not exit', async () => {
    const auction = AuctionMother.create();
    const query = `
          query{
            auction(id: "${auction.id.value}"){
              id
              expedient
              judicialDistrict
              district
              province
              department
              fechaResolucion
              description
              convocatoria
              tipoCambio
              tasacion
              precioBase
              incremento
              arancel
              oblaje
              tipoInmueble
              direccion
              cargaGravamen
              porcentaje
              presentacionOferta
            }
          }
          `;
    return request(app.getHttpServer())
      .post(`/graphql`)
      .send({ query: query, variables: {} })
      .then(async (response) => {
        expect(response.body).toEqual({
          data: {
            auction: null,
          },
        });
        const auctionDb = await repository.findById(auction.id);
        expect(auctionDb).toBeNull();
        expect(response.statusCode).toEqual(200);
      });
  });
});
