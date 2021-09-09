import { Injectable } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';
import { AuctionRepository } from '../../domain/auction.repository';
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

@Injectable()
export class AuctionPersistService {
  constructor(private repository: AuctionRepository, private eventBus: EventBus) {}

  public async execute(
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
  ): Promise<void> {
    let auction = await this.repository.findById(id);
    if (!auction) {
      auction = Auction.create(
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
    } else {
      auction.update(
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
    }
    await this.repository.persist(auction);
    this.eventBus.publishAll(auction.pullDomainEvents());
  }
}
