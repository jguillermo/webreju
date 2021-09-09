import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AuctionPersistService } from './auction-persist.service';
import { AuctionPersistDto } from './auction-persist.dto';
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

@CommandHandler(AuctionPersistDto)
export class AuctionPersistHandler implements ICommandHandler<AuctionPersistDto> {
  constructor(private service: AuctionPersistService) {}

  async execute(dto: AuctionPersistDto): Promise<void> {
    const id = new AuctionId(dto.id);
    const expedient = new AuctionExpedient(dto.expedient);
    const judicialDistrict = new AuctionJudicialDistrict(dto.judicialDistrict);
    const district = new AuctionDistrict(dto.district);
    const province = new AuctionProvince(dto.province);
    const department = new AuctionDepartment(dto.department);
    const fechaResolucion = new AuctionFechaResolucion(dto.fechaResolucion);
    const description = new AuctionDescription(dto.description);
    const convocatoria = new AuctionConvocatoria(dto.convocatoria);
    const tipoCambio = new AuctionTipoCambio(dto.tipoCambio);
    const tasacion = new AuctionTasacion(dto.tasacion);
    const precioBase = new AuctionPrecioBase(dto.precioBase);
    const incremento = new AuctionIncremento(dto.incremento);
    const arancel = new AuctionArancel(dto.arancel);
    const oblaje = new AuctionOblaje(dto.oblaje);
    const tipoInmueble = new AuctionTipoInmueble(dto.tipoInmueble);
    const direccion = new AuctionDireccion(dto.direccion);
    const cargaGravamen = new AuctionCargaGravamen(dto.cargaGravamen);
    const porcentaje = new AuctionPorcentaje(dto.porcentaje);
    const presentacionOferta = new AuctionPresentacionOferta(dto.presentacionOferta);

    await this.service.execute(
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
  }
}
