import { Auction } from '../../domain/auction';
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
import { ItemDto } from '../../../share/infrastructure/firestore/firestore.service';

export class AuctionDao {
  id: string;
  expedient: string;
  judicialDistrict: string;
  district: string;
  province: string;
  department: string;
  fechaResolucion: string;
  description: string;
  convocatoria: string;
  tipoCambio: string;
  tasacion: string;
  precioBase: string;
  incremento: string;
  arancel: string;
  oblaje: string;
  tipoInmueble: string;
  direccion: string;
  cargaGravamen: string;
  porcentaje: string;
  presentacionOferta: string;

  static fromAggregate(auction: Auction): AuctionDao {
    const dao = new AuctionDao();
    dao.id = auction.id.value;
    dao.expedient = auction.expedient.value;
    dao.judicialDistrict = auction.judicialDistrict.value;
    dao.district = auction.district.value;
    dao.province = auction.province.value;
    dao.department = auction.department.value;
    dao.fechaResolucion = auction.fechaResolucion.value;
    dao.description = auction.description.value;
    dao.convocatoria = auction.convocatoria.value;
    dao.tipoCambio = auction.tipoCambio.value;
    dao.tasacion = auction.tasacion.value;
    dao.precioBase = auction.precioBase.value;
    dao.incremento = auction.incremento.value;
    dao.arancel = auction.arancel.value;
    dao.oblaje = auction.oblaje.value;
    dao.tipoInmueble = auction.tipoInmueble.value;
    dao.direccion = auction.direccion.value;
    dao.cargaGravamen = auction.cargaGravamen.value;
    dao.porcentaje = auction.porcentaje.value;
    dao.presentacionOferta = auction.presentacionOferta.value;
    return dao;
  }

  static fromItem(item: ItemDto): AuctionDao {
    const dao = new AuctionDao();
    //item.data.id = item.id
    dao.id = item.data.id;
    dao.expedient = item.data.expedient;
    dao.judicialDistrict = item.data.judicialDistrict;
    dao.district = item.data.district;
    dao.province = item.data.province;
    dao.department = item.data.department;
    dao.fechaResolucion = item.data.fechaResolucion;
    dao.description = item.data.description;
    dao.convocatoria = item.data.convocatoria;
    dao.tipoCambio = item.data.tipoCambio;
    dao.tasacion = item.data.tasacion;
    dao.precioBase = item.data.precioBase;
    dao.incremento = item.data.incremento;
    dao.arancel = item.data.arancel;
    dao.oblaje = item.data.oblaje;
    dao.tipoInmueble = item.data.tipoInmueble;
    dao.direccion = item.data.direccion;
    dao.cargaGravamen = item.data.cargaGravamen;
    dao.porcentaje = item.data.porcentaje;
    dao.presentacionOferta = item.data.presentacionOferta;
    return dao;
  }

  get data() {
    return {
      id: this.id,
      expedient: this.expedient,
      judicialDistrict: this.judicialDistrict,
      district: this.district,
      province: this.province,
      department: this.department,
      fechaResolucion: this.fechaResolucion,
      description: this.description,
      convocatoria: this.convocatoria,
      tipoCambio: this.tipoCambio,
      tasacion: this.tasacion,
      precioBase: this.precioBase,
      incremento: this.incremento,
      arancel: this.arancel,
      oblaje: this.oblaje,
      tipoInmueble: this.tipoInmueble,
      direccion: this.direccion,
      cargaGravamen: this.cargaGravamen,
      porcentaje: this.porcentaje,
      presentacionOferta: this.presentacionOferta,
    };
  }

  toAggregate(): Auction {
    return new Auction(
      new AuctionId(this.id),
      new AuctionExpedient(this.expedient),
      new AuctionJudicialDistrict(this.judicialDistrict),
      new AuctionDistrict(this.district),
      new AuctionProvince(this.province),
      new AuctionDepartment(this.department),
      new AuctionFechaResolucion(this.fechaResolucion),
      new AuctionDescription(this.description),
      new AuctionConvocatoria(this.convocatoria),
      new AuctionTipoCambio(this.tipoCambio),
      new AuctionTasacion(this.tasacion),
      new AuctionPrecioBase(this.precioBase),
      new AuctionIncremento(this.incremento),
      new AuctionArancel(this.arancel),
      new AuctionOblaje(this.oblaje),
      new AuctionTipoInmueble(this.tipoInmueble),
      new AuctionDireccion(this.direccion),
      new AuctionCargaGravamen(this.cargaGravamen),
      new AuctionPorcentaje(this.porcentaje),
      new AuctionPresentacionOferta(this.presentacionOferta),
    );
  }
}
