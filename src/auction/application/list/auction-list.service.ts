import { Injectable } from '@nestjs/common';
import { AuctionRepository } from '../../domain/auction.repository';
import { AuctionResponse } from '../auction.response';
import { ListAuctionResponse } from '../list-auction.response';
import { FilterOpStr, OrderTypeImp, PaginatorTypeImp } from 'base-ddd';
import { StringTypeImp } from 'base-ddd/dist/ValueObject/Implement/StringTypeImp';
import { UUIDTypeImp } from 'base-ddd/dist/ValueObject/Implement/UUIDTypeImp';

@Injectable()
export class AuctionListService {
  constructor(private repository: AuctionRepository) {}

  public async execute(
    id: UUIDTypeImp,
    expedient: StringTypeImp,
    judicialDistrict: StringTypeImp,
    district: StringTypeImp,
    province: StringTypeImp,
    department: StringTypeImp,
    fechaResolucion: StringTypeImp,
    description: StringTypeImp,
    convocatoria: StringTypeImp,
    tipoCambio: StringTypeImp,
    tasacion: StringTypeImp,
    precioBase: StringTypeImp,
    incremento: StringTypeImp,
    arancel: StringTypeImp,
    oblaje: StringTypeImp,
    tipoInmueble: StringTypeImp,
    direccion: StringTypeImp,
    cargaGravamen: StringTypeImp,
    porcentaje: StringTypeImp,
    presentacionOferta: StringTypeImp,
    paginator: PaginatorTypeImp,
    order: OrderTypeImp,
  ): Promise<ListAuctionResponse> {
    const listAuction = await this.repository.findAll(
      [
        {
          field: 'id',
          opStr: FilterOpStr.EQUAL_TO,
          value: id.value,
        },
        {
          field: 'expedient',
          opStr: FilterOpStr.EQUAL_TO,
          value: expedient.value,
        },
        {
          field: 'judicialDistrict',
          opStr: FilterOpStr.EQUAL_TO,
          value: judicialDistrict.value,
        },
        {
          field: 'district',
          opStr: FilterOpStr.EQUAL_TO,
          value: district.value,
        },
        {
          field: 'province',
          opStr: FilterOpStr.EQUAL_TO,
          value: province.value,
        },
        {
          field: 'department',
          opStr: FilterOpStr.EQUAL_TO,
          value: department.value,
        },
        {
          field: 'fechaResolucion',
          opStr: FilterOpStr.EQUAL_TO,
          value: fechaResolucion.value,
        },
        {
          field: 'description',
          opStr: FilterOpStr.EQUAL_TO,
          value: description.value,
        },
        {
          field: 'convocatoria',
          opStr: FilterOpStr.EQUAL_TO,
          value: convocatoria.value,
        },
        {
          field: 'tipoCambio',
          opStr: FilterOpStr.EQUAL_TO,
          value: tipoCambio.value,
        },
        {
          field: 'tasacion',
          opStr: FilterOpStr.EQUAL_TO,
          value: tasacion.value,
        },
        {
          field: 'precioBase',
          opStr: FilterOpStr.EQUAL_TO,
          value: precioBase.value,
        },
        {
          field: 'incremento',
          opStr: FilterOpStr.EQUAL_TO,
          value: incremento.value,
        },
        {
          field: 'arancel',
          opStr: FilterOpStr.EQUAL_TO,
          value: arancel.value,
        },
        {
          field: 'oblaje',
          opStr: FilterOpStr.EQUAL_TO,
          value: oblaje.value,
        },
        {
          field: 'tipoInmueble',
          opStr: FilterOpStr.EQUAL_TO,
          value: tipoInmueble.value,
        },
        {
          field: 'direccion',
          opStr: FilterOpStr.EQUAL_TO,
          value: direccion.value,
        },
        {
          field: 'cargaGravamen',
          opStr: FilterOpStr.EQUAL_TO,
          value: cargaGravamen.value,
        },
        {
          field: 'porcentaje',
          opStr: FilterOpStr.EQUAL_TO,
          value: porcentaje.value,
        },
        {
          field: 'presentacionOferta',
          opStr: FilterOpStr.EQUAL_TO,
          value: presentacionOferta.value,
        },
      ],
      paginator,
      order,
    );
    return new ListAuctionResponse(
      listAuction.map((auction) => {
        return AuctionResponse.fromAggregate(auction);
      }),
    );
  }
}
