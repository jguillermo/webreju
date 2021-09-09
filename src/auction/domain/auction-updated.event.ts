import { EventBase } from 'base-ddd';

export class AuctionUpdatedEvent extends EventBase {
  constructor(
    private _id: string,
    private _expedient: string,
    private _judicialDistrict: string,
    private _district: string,
    private _province: string,
    private _department: string,
    private _fechaResolucion: string,
    private _description: string,
    private _convocatoria: string,
    private _tipoCambio: string,
    private _tasacion: string,
    private _precioBase: string,
    private _incremento: string,
    private _arancel: string,
    private _oblaje: string,
    private _tipoInmueble: string,
    private _direccion: string,
    private _cargaGravamen: string,
    private _porcentaje: string,
    private _presentacionOferta: string,
  ) {
    super();
  }

  get id(): string {
    return this._id;
  }

  get expedient(): string {
    return this._expedient;
  }

  get judicialDistrict(): string {
    return this._judicialDistrict;
  }

  get district(): string {
    return this._district;
  }

  get province(): string {
    return this._province;
  }

  get department(): string {
    return this._department;
  }

  get fechaResolucion(): string {
    return this._fechaResolucion;
  }

  get description(): string {
    return this._description;
  }

  get convocatoria(): string {
    return this._convocatoria;
  }

  get tipoCambio(): string {
    return this._tipoCambio;
  }

  get tasacion(): string {
    return this._tasacion;
  }

  get precioBase(): string {
    return this._precioBase;
  }

  get incremento(): string {
    return this._incremento;
  }

  get arancel(): string {
    return this._arancel;
  }

  get oblaje(): string {
    return this._oblaje;
  }

  get tipoInmueble(): string {
    return this._tipoInmueble;
  }

  get direccion(): string {
    return this._direccion;
  }

  get cargaGravamen(): string {
    return this._cargaGravamen;
  }

  get porcentaje(): string {
    return this._porcentaje;
  }

  get presentacionOferta(): string {
    return this._presentacionOferta;
  }

  eventName(): string {
    return 'auction.updated';
  }
}
