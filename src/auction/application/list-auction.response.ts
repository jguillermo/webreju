import { AuctionResponse } from './auction.response';

export class ListAuctionResponse {
  public list: AuctionResponse[];

  constructor(list: AuctionResponse[]) {
    this.list = list;
  }
}
