import { Validate } from 'class-validator';
import { ArgsType, Field } from '@nestjs/graphql';
import { DomainValidator } from 'base-ddd';
import { BaseDto } from '../../../share/application/base.dto';
import { AuctionId } from '../../domain/auction-id';

@ArgsType()
export class AuctionDeleteDto extends BaseDto {
  constructor() {
    super();
  }

  @Validate(DomainValidator, [AuctionId])
  @Field()
  id: string;
}
