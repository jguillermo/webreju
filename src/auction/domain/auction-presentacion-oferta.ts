import { StringType } from 'base-ddd';

export class AuctionPresentacionOferta extends StringType {
  isValid(): boolean {
    if (this.isNull) {
      throw new Error('is required.');
    }
    if (this.isEmpty) {
      throw new Error('should not be empty.');
    }
    return true;
  }
}
