import { ArgsType, Field } from '@nestjs/graphql';
import { IsOptional, Validate } from 'class-validator';
import { DomainValidator, OrderTypeImp, PaginatorTypeImp } from 'base-ddd';
import { BaseDto, OrderDto, PaginatorDto } from '../../../share/application/base.dto';
import { StringTypeImp } from 'base-ddd/dist/ValueObject/Implement/StringTypeImp';
import { UUIDTypeImp } from 'base-ddd/dist/ValueObject/Implement/UUIDTypeImp';

@ArgsType()
export class AuctionListDto extends BaseDto {
  constructor() {
    super();
  }

  @Validate(DomainValidator, [UUIDTypeImp])
  @Field({ nullable: true })
  id?: string;

  @Validate(DomainValidator, [StringTypeImp])
  @Field({ nullable: true })
  expedient?: string;

  @Validate(DomainValidator, [StringTypeImp])
  @Field({ nullable: true })
  judicialDistrict?: string;

  @Validate(DomainValidator, [StringTypeImp])
  @Field({ nullable: true })
  district?: string;

  @Validate(DomainValidator, [StringTypeImp])
  @Field({ nullable: true })
  province?: string;

  @Validate(DomainValidator, [StringTypeImp])
  @Field({ nullable: true })
  department?: string;

  @Validate(DomainValidator, [StringTypeImp])
  @Field({ nullable: true })
  fechaResolucion?: string;

  @Validate(DomainValidator, [StringTypeImp])
  @Field({ nullable: true })
  description?: string;

  @Validate(DomainValidator, [StringTypeImp])
  @Field({ nullable: true })
  convocatoria?: string;

  @Validate(DomainValidator, [StringTypeImp])
  @Field({ nullable: true })
  tipoCambio?: string;

  @Validate(DomainValidator, [StringTypeImp])
  @Field({ nullable: true })
  tasacion?: string;

  @Validate(DomainValidator, [StringTypeImp])
  @Field({ nullable: true })
  precioBase?: string;

  @Validate(DomainValidator, [StringTypeImp])
  @Field({ nullable: true })
  incremento?: string;

  @Validate(DomainValidator, [StringTypeImp])
  @Field({ nullable: true })
  arancel?: string;

  @Validate(DomainValidator, [StringTypeImp])
  @Field({ nullable: true })
  oblaje?: string;

  @Validate(DomainValidator, [StringTypeImp])
  @Field({ nullable: true })
  tipoInmueble?: string;

  @Validate(DomainValidator, [StringTypeImp])
  @Field({ nullable: true })
  direccion?: string;

  @Validate(DomainValidator, [StringTypeImp])
  @Field({ nullable: true })
  cargaGravamen?: string;

  @Validate(DomainValidator, [StringTypeImp])
  @Field({ nullable: true })
  porcentaje?: string;

  @Validate(DomainValidator, [StringTypeImp])
  @Field({ nullable: true })
  presentacionOferta?: string;

  @IsOptional()
  @Validate(DomainValidator, [PaginatorTypeImp])
  @Field(() => PaginatorDto, { nullable: true })
  paginator?: PaginatorDto;

  @IsOptional()
  @Validate(DomainValidator, [OrderTypeImp])
  @Field(() => OrderDto, { nullable: true })
  order?: OrderDto;
}
