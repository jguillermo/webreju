import { Auction } from '../domain/auction';

export class AuctionResponse {
  constructor(
    public id: string,
    public expedient: string,
    public judicialDistrict: string,
    public district: string,
    public province: string,
    public department: string,
    public fechaResolucion: string,
    public description: string,
    public convocatoria: string,
    public tipoCambio: string,
    public tasacion: string,
    public precioBase: string,
    public incremento: string,
    public arancel: string,
    public oblaje: string,
    public tipoInmueble: string,
    public direccion: string,
    public cargaGravamen: string,
    public porcentaje: string,
    public presentacionOferta: string,
  ) {}

  static fromAggregate(auction: Auction) {
    return new AuctionResponse(
      auction.id.value,
      auction.expedient.value,
      auction.judicialDistrict.value,
      auction.district.value,
      auction.province.value,
      auction.department.value,
      auction.fechaResolucion.value,
      auction.description.value,
      auction.convocatoria.value,
      auction.tipoCambio.value,
      auction.tasacion.value,
      auction.precioBase.value,
      auction.incremento.value,
      auction.arancel.value,
      auction.oblaje.value,
      auction.tipoInmueble.value,
      auction.direccion.value,
      auction.cargaGravamen.value,
      auction.porcentaje.value,
      auction.presentacionOferta.value,
    );
  }
}
