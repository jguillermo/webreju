import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { OrderTypeImp, PaginatorTypeImp } from 'base-ddd';
import { ListAuctionResponse } from '../list-auction.response';
import { StringTypeImp } from 'base-ddd/dist/ValueObject/Implement/StringTypeImp';
import { UUIDTypeImp } from 'base-ddd/dist/ValueObject/Implement/UUIDTypeImp';
import { AuctionListDto } from './auction-list.dto';
import { AuctionListService } from './auction-list.service';

@QueryHandler(AuctionListDto)
export class AuctionListHandler implements IQueryHandler<AuctionListDto> {
  constructor(private service: AuctionListService) {}

  async execute(dto: AuctionListDto): Promise<ListAuctionResponse> {
    const id = new UUIDTypeImp(dto.id);
    const expedient = new StringTypeImp(dto.expedient);
    const judicialDistrict = new StringTypeImp(dto.judicialDistrict);
    const district = new StringTypeImp(dto.district);
    const province = new StringTypeImp(dto.province);
    const department = new StringTypeImp(dto.department);
    const fechaResolucion = new StringTypeImp(dto.fechaResolucion);
    const description = new StringTypeImp(dto.description);
    const convocatoria = new StringTypeImp(dto.convocatoria);
    const tipoCambio = new StringTypeImp(dto.tipoCambio);
    const tasacion = new StringTypeImp(dto.tasacion);
    const precioBase = new StringTypeImp(dto.precioBase);
    const incremento = new StringTypeImp(dto.incremento);
    const arancel = new StringTypeImp(dto.arancel);
    const oblaje = new StringTypeImp(dto.oblaje);
    const tipoInmueble = new StringTypeImp(dto.tipoInmueble);
    const direccion = new StringTypeImp(dto.direccion);
    const cargaGravamen = new StringTypeImp(dto.cargaGravamen);
    const porcentaje = new StringTypeImp(dto.porcentaje);
    const presentacionOferta = new StringTypeImp(dto.presentacionOferta);
    const paginator = PaginatorTypeImp.create(dto.paginator?.page, dto.paginator?.perPage);
    const order = OrderTypeImp.create(dto.order?.field, dto.order?.direction);

    return await this.service.execute(
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
      paginator,
      order,
    );
  }
}
