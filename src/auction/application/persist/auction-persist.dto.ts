import { Validate, IsOptional } from 'class-validator';
import { ArgsType, Field } from '@nestjs/graphql';
import { DomainValidator } from 'base-ddd';
import { BaseDto } from '../../../share/application/base.dto';
import { AuctionId } from '../../domain/auction-id';
import { AuctionExpedient } from '../../domain/auction-expedient';
import { AuctionJudicialDistrict } from '../../domain/auction-judicial-district';
import { AuctionDistrict } from '../../domain/auction-district';
import { AuctionProvince } from '../../domain/auction-province';
import { AuctionDepartment } from '../../domain/auction-department';
import { AuctionFechaResolucion } from '../../domain/auction-fecha-resolucion';
import { AuctionDescription } from '../../domain/auction-description';
import { AuctionConvocatoria } from '../../domain/auction-convocatoria';
import { AuctionTipoCambio } from '../../domain/auction-tipo-cambio';
import { AuctionTasacion } from '../../domain/auction-tasacion';
import { AuctionPrecioBase } from '../../domain/auction-precio-base';
import { AuctionIncremento } from '../../domain/auction-incremento';
import { AuctionArancel } from '../../domain/auction-arancel';
import { AuctionOblaje } from '../../domain/auction-oblaje';
import { AuctionTipoInmueble } from '../../domain/auction-tipo-inmueble';
import { AuctionDireccion } from '../../domain/auction-direccion';
import { AuctionCargaGravamen } from '../../domain/auction-carga-gravamen';
import { AuctionPorcentaje } from '../../domain/auction-porcentaje';
import { AuctionPresentacionOferta } from '../../domain/auction-presentacion-oferta';

@ArgsType()
export class AuctionPersistDto extends BaseDto {
  constructor() {
    super();
  }

  @Validate(DomainValidator, [AuctionId])
  @Field()
  id: string;

  @Validate(DomainValidator, [AuctionExpedient])
  @Field()
  expedient: string;

  @Validate(DomainValidator, [AuctionJudicialDistrict])
  @Field()
  judicialDistrict: string;

  @Validate(DomainValidator, [AuctionDistrict])
  @Field()
  district: string;

  @Validate(DomainValidator, [AuctionProvince])
  @Field()
  province: string;

  @Validate(DomainValidator, [AuctionDepartment])
  @Field()
  department: string;

  @Validate(DomainValidator, [AuctionFechaResolucion])
  @Field()
  fechaResolucion: string;

  @Validate(DomainValidator, [AuctionDescription])
  @Field()
  description: string;

  @Validate(DomainValidator, [AuctionConvocatoria])
  @Field()
  convocatoria: string;

  @Validate(DomainValidator, [AuctionTipoCambio])
  @Field()
  tipoCambio: string;

  @Validate(DomainValidator, [AuctionTasacion])
  @Field()
  tasacion: string;

  @Validate(DomainValidator, [AuctionPrecioBase])
  @Field()
  precioBase: string;

  @Validate(DomainValidator, [AuctionIncremento])
  @Field()
  incremento: string;

  @Validate(DomainValidator, [AuctionArancel])
  @Field()
  arancel: string;

  @Validate(DomainValidator, [AuctionOblaje])
  @Field()
  oblaje: string;

  @Validate(DomainValidator, [AuctionTipoInmueble])
  @Field()
  tipoInmueble: string;

  @Validate(DomainValidator, [AuctionDireccion])
  @Field()
  direccion: string;

  @Validate(DomainValidator, [AuctionCargaGravamen])
  @Field()
  cargaGravamen: string;

  @Validate(DomainValidator, [AuctionPorcentaje])
  @Field()
  porcentaje: string;

  @Validate(DomainValidator, [AuctionPresentacionOferta])
  @Field()
  presentacionOferta: string;

  @IsOptional()
  @Field({ nullable: true, defaultValue: false })
  showEntity?: boolean;
}
