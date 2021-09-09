import { ArgsType, Field } from '@nestjs/graphql';
import { Validate } from 'class-validator';
import { DomainValidator } from 'base-ddd';
import { BaseDto } from '../../../share/application/base.dto';
import { AuctionId } from '../../domain/auction-id';

@ArgsType()
export class AuctionFindByIdDto extends BaseDto {
  constructor(id: string) {
    super();
    this.id = id;
  }

  @Validate(DomainValidator, [AuctionId])
  @Field()
  id: string;
}
