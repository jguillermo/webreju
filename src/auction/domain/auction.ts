import { AggregateRoot } from 'base-ddd';
import { AuctionId } from './auction-id';
import { AuctionExpedient } from './auction-expedient';
import { AuctionJudicialDistrict } from './auction-judicial-district';
import { AuctionDistrict } from './auction-district';
import { AuctionProvince } from './auction-province';
import { AuctionDepartment } from './auction-department';
import { AuctionFechaResolucion } from './auction-fecha-resolucion';
import { AuctionDescription } from './auction-description';
import { AuctionConvocatoria } from './auction-convocatoria';
import { AuctionTipoCambio } from './auction-tipo-cambio';
import { AuctionTasacion } from './auction-tasacion';
import { AuctionPrecioBase } from './auction-precio-base';
import { AuctionIncremento } from './auction-incremento';
import { AuctionArancel } from './auction-arancel';
import { AuctionOblaje } from './auction-oblaje';
import { AuctionTipoInmueble } from './auction-tipo-inmueble';
import { AuctionDireccion } from './auction-direccion';
import { AuctionCargaGravamen } from './auction-carga-gravamen';
import { AuctionPorcentaje } from './auction-porcentaje';
import { AuctionPresentacionOferta } from './auction-presentacion-oferta';
import { AuctionCreatedEvent } from './auction-created.event';
import { AuctionUpdatedEvent } from './auction-updated.event';
import { AuctionDeletedEvent } from './auction-deleted.event';

export class Auction extends AggregateRoot {
  constructor(
    private _id: AuctionId,
    private _expedient: AuctionExpedient,
    private _judicialDistrict: AuctionJudicialDistrict,
    private _district: AuctionDistrict,
    private _province: AuctionProvince,
    private _department: AuctionDepartment,
    private _fechaResolucion: AuctionFechaResolucion,
    private _description: AuctionDescription,
    private _convocatoria: AuctionConvocatoria,
    private _tipoCambio: AuctionTipoCambio,
    private _tasacion: AuctionTasacion,
    private _precioBase: AuctionPrecioBase,
    private _incremento: AuctionIncremento,
    private _arancel: AuctionArancel,
    private _oblaje: AuctionOblaje,
    private _tipoInmueble: AuctionTipoInmueble,
    private _direccion: AuctionDireccion,
    private _cargaGravamen: AuctionCargaGravamen,
    private _porcentaje: AuctionPorcentaje,
    private _presentacionOferta: AuctionPresentacionOferta,
  ) {
    super();
  }

  static create(
    id: AuctionId,
    expedient: AuctionExpedient,
    judicialDistrict: AuctionJudicialDistrict,
    district: AuctionDistrict,
    province: AuctionProvince,
    department: AuctionDepartment,
    fechaResolucion: AuctionFechaResolucion,
    description: AuctionDescription,
    convocatoria: AuctionConvocatoria,
    tipoCambio: AuctionTipoCambio,
    tasacion: AuctionTasacion,
    precioBase: AuctionPrecioBase,
    incremento: AuctionIncremento,
    arancel: AuctionArancel,
    oblaje: AuctionOblaje,
    tipoInmueble: AuctionTipoInmueble,
    direccion: AuctionDireccion,
    cargaGravamen: AuctionCargaGravamen,
    porcentaje: AuctionPorcentaje,
    presentacionOferta: AuctionPresentacionOferta,
  ): Auction {
    const auction = new Auction(
      id,
      expedient,
      judicialDistrict,
      district,
      province,
      department,
      fechaResolucion,
      description,
      convocatoria,
      tipoCambio,
      tasacion,
      precioBase,
      incremento,
      arancel,
      oblaje,
      tipoInmueble,
      direccion,
      cargaGravamen,
      porcentaje,
      presentacionOferta,
    );
    auction.record(
      new AuctionCreatedEvent(
        id.value,
        expedient.value,
        judicialDistrict.value,
        district.value,
        province.value,
        department.value,
        fechaResolucion.value,
        description.value,
        convocatoria.value,
        tipoCambio.value,
        tasacion.value,
        precioBase.value,
        incremento.value,
        arancel.value,
        oblaje.value,
        tipoInmueble.value,
        direccion.value,
        cargaGravamen.value,
        porcentaje.value,
        presentacionOferta.value,
      ),
    );
    return auction;
  }

  get id(): AuctionId {
    return this._id;
  }

  get expedient(): AuctionExpedient {
    return this._expedient;
  }

  get judicialDistrict(): AuctionJudicialDistrict {
    return this._judicialDistrict;
  }

  get district(): AuctionDistrict {
    return this._district;
  }

  get province(): AuctionProvince {
    return this._province;
  }

  get department(): AuctionDepartment {
    return this._department;
  }

  get fechaResolucion(): AuctionFechaResolucion {
    return this._fechaResolucion;
  }

  get description(): AuctionDescription {
    return this._description;
  }

  get convocatoria(): AuctionConvocatoria {
    return this._convocatoria;
  }

  get tipoCambio(): AuctionTipoCambio {
    return this._tipoCambio;
  }

  get tasacion(): AuctionTasacion {
    return this._tasacion;
  }

  get precioBase(): AuctionPrecioBase {
    return this._precioBase;
  }

  get incremento(): AuctionIncremento {
    return this._incremento;
  }

  get arancel(): AuctionArancel {
    return this._arancel;
  }

  get oblaje(): AuctionOblaje {
    return this._oblaje;
  }

  get tipoInmueble(): AuctionTipoInmueble {
    return this._tipoInmueble;
  }

  get direccion(): AuctionDireccion {
    return this._direccion;
  }

  get cargaGravamen(): AuctionCargaGravamen {
    return this._cargaGravamen;
  }

  get porcentaje(): AuctionPorcentaje {
    return this._porcentaje;
  }

  get presentacionOferta(): AuctionPresentacionOferta {
    return this._presentacionOferta;
  }

  update(
    expedient: AuctionExpedient,
    judicialDistrict: AuctionJudicialDistrict,
    district: AuctionDistrict,
    province: AuctionProvince,
    department: AuctionDepartment,
    fechaResolucion: AuctionFechaResolucion,
    description: AuctionDescription,
    convocatoria: AuctionConvocatoria,
    tipoCambio: AuctionTipoCambio,
    tasacion: AuctionTasacion,
    precioBase: AuctionPrecioBase,
    incremento: AuctionIncremento,
    arancel: AuctionArancel,
    oblaje: AuctionOblaje,
    tipoInmueble: AuctionTipoInmueble,
    direccion: AuctionDireccion,
    cargaGravamen: AuctionCargaGravamen,
    porcentaje: AuctionPorcentaje,
    presentacionOferta: AuctionPresentacionOferta,
  ): void {
    this._expedient = expedient;
    this._judicialDistrict = judicialDistrict;
    this._district = district;
    this._province = province;
    this._department = department;
    this._fechaResolucion = fechaResolucion;
    this._description = description;
    this._convocatoria = convocatoria;
    this._tipoCambio = tipoCambio;
    this._tasacion = tasacion;
    this._precioBase = precioBase;
    this._incremento = incremento;
    this._arancel = arancel;
    this._oblaje = oblaje;
    this._tipoInmueble = tipoInmueble;
    this._direccion = direccion;
    this._cargaGravamen = cargaGravamen;
    this._porcentaje = porcentaje;
    this._presentacionOferta = presentacionOferta;
    this.record(
      new AuctionUpdatedEvent(
        this.id.value,
        this.expedient.value,
        this.judicialDistrict.value,
        this.district.value,
        this.province.value,
        this.department.value,
        this.fechaResolucion.value,
        this.description.value,
        this.convocatoria.value,
        this.tipoCambio.value,
        this.tasacion.value,
        this.precioBase.value,
        this.incremento.value,
        this.arancel.value,
        this.oblaje.value,
        this.tipoInmueble.value,
        this.direccion.value,
        this.cargaGravamen.value,
        this.porcentaje.value,
        this.presentacionOferta.value,
      ),
    );
  }

  delete(): void {
    this.record(
      new AuctionDeletedEvent(
        this.id.value,
        this.expedient.value,
        this.judicialDistrict.value,
        this.district.value,
        this.province.value,
        this.department.value,
        this.fechaResolucion.value,
        this.description.value,
        this.convocatoria.value,
        this.tipoCambio.value,
        this.tasacion.value,
        this.precioBase.value,
        this.incremento.value,
        this.arancel.value,
        this.oblaje.value,
        this.tipoInmueble.value,
        this.direccion.value,
        this.cargaGravamen.value,
        this.porcentaje.value,
        this.presentacionOferta.value,
      ),
    );
  }
}
