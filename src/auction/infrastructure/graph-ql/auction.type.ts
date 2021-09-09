import { createUnionType, Field, ObjectType } from '@nestjs/graphql';
import { StatusType } from '../../../share/app/status.type';

@ObjectType('Auction')
export class AuctionType {
  @Field()
  id: string;

  @Field()
  expedient: string;

  @Field()
  judicialDistrict: string;

  @Field()
  district: string;

  @Field()
  province: string;

  @Field()
  department: string;

  @Field()
  fechaResolucion: string;

  @Field()
  description: string;

  @Field()
  convocatoria: string;

  @Field()
  tipoCambio: string;

  @Field()
  tasacion: string;

  @Field()
  precioBase: string;

  @Field()
  incremento: string;

  @Field()
  arancel: string;

  @Field()
  oblaje: string;

  @Field()
  tipoInmueble: string;

  @Field()
  direccion: string;

  @Field()
  cargaGravamen: string;

  @Field()
  porcentaje: string;

  @Field()
  presentacionOferta: string;
}

export const ResultAuctionPersist = createUnionType({
  name: 'ResultAuctionPersist',
  types: () => [AuctionType, StatusType],
  resolveType(value) {
    if (value.status) {
      return StatusType;
    }
    return AuctionType;
  },
});
