import * as faker from 'faker';
import { Auction } from '../../src/auction/domain/auction';
import { AuctionId } from '../../src/auction/domain/auction-id';
import { AuctionExpedient } from '../../src/auction/domain/auction-expedient';
import { AuctionJudicialDistrict } from '../../src/auction/domain/auction-judicial-district';
import { AuctionDistrict } from '../../src/auction/domain/auction-district';
import { AuctionProvince } from '../../src/auction/domain/auction-province';
import { AuctionDepartment } from '../../src/auction/domain/auction-department';
import { AuctionFechaResolucion } from '../../src/auction/domain/auction-fecha-resolucion';
import { AuctionDescription } from '../../src/auction/domain/auction-description';
import { AuctionConvocatoria } from '../../src/auction/domain/auction-convocatoria';
import { AuctionTipoCambio } from '../../src/auction/domain/auction-tipo-cambio';
import { AuctionTasacion } from '../../src/auction/domain/auction-tasacion';
import { AuctionPrecioBase } from '../../src/auction/domain/auction-precio-base';
import { AuctionIncremento } from '../../src/auction/domain/auction-incremento';
import { AuctionArancel } from '../../src/auction/domain/auction-arancel';
import { AuctionOblaje } from '../../src/auction/domain/auction-oblaje';
import { AuctionTipoInmueble } from '../../src/auction/domain/auction-tipo-inmueble';
import { AuctionDireccion } from '../../src/auction/domain/auction-direccion';
import { AuctionCargaGravamen } from '../../src/auction/domain/auction-carga-gravamen';
import { AuctionPorcentaje } from '../../src/auction/domain/auction-porcentaje';
import { AuctionPresentacionOferta } from '../../src/auction/domain/auction-presentacion-oferta';

export interface AuctionDataInterface {
  id?: string;
  expedient?: string;
  judicialDistrict?: string;
  district?: string;
  province?: string;
  department?: string;
  fechaResolucion?: string;
  description?: string;
  convocatoria?: string;
  tipoCambio?: string;
  tasacion?: string;
  precioBase?: string;
  incremento?: string;
  arancel?: string;
  oblaje?: string;
  tipoInmueble?: string;
  direccion?: string;
  cargaGravamen?: string;
  porcentaje?: string;
  presentacionOferta?: string;
}

export class AuctionIdMother {
  static create(value?: string): AuctionId {
    const id = value ? value : faker.datatype.uuid();
    return new AuctionId(id);
  }
}

export class AuctionExpedientMother {
  static create(value?: string): AuctionExpedient {
    const expedient = value ? value : faker.random.word();
    return new AuctionExpedient(expedient);
  }
}

export class AuctionJudicialDistrictMother {
  static create(value?: string): AuctionJudicialDistrict {
    const judicialDistrict = value ? value : faker.random.word();
    return new AuctionJudicialDistrict(judicialDistrict);
  }
}

export class AuctionDistrictMother {
  static create(value?: string): AuctionDistrict {
    const district = value ? value : faker.random.word();
    return new AuctionDistrict(district);
  }
}

export class AuctionProvinceMother {
  static create(value?: string): AuctionProvince {
    const province = value ? value : faker.random.word();
    return new AuctionProvince(province);
  }
}

export class AuctionDepartmentMother {
  static create(value?: string): AuctionDepartment {
    const department = value ? value : faker.random.word();
    return new AuctionDepartment(department);
  }
}

export class AuctionFechaResolucionMother {
  static create(value?: string): AuctionFechaResolucion {
    const fechaResolucion = value ? value : faker.random.word();
    return new AuctionFechaResolucion(fechaResolucion);
  }
}

export class AuctionDescriptionMother {
  static create(value?: string): AuctionDescription {
    const description = value ? value : faker.random.word();
    return new AuctionDescription(description);
  }
}

export class AuctionConvocatoriaMother {
  static create(value?: string): AuctionConvocatoria {
    const convocatoria = value ? value : faker.random.word();
    return new AuctionConvocatoria(convocatoria);
  }
}

export class AuctionTipoCambioMother {
  static create(value?: string): AuctionTipoCambio {
    const tipoCambio = value ? value : faker.random.word();
    return new AuctionTipoCambio(tipoCambio);
  }
}

export class AuctionTasacionMother {
  static create(value?: string): AuctionTasacion {
    const tasacion = value ? value : faker.random.word();
    return new AuctionTasacion(tasacion);
  }
}

export class AuctionPrecioBaseMother {
  static create(value?: string): AuctionPrecioBase {
    const precioBase = value ? value : faker.random.word();
    return new AuctionPrecioBase(precioBase);
  }
}

export class AuctionIncrementoMother {
  static create(value?: string): AuctionIncremento {
    const incremento = value ? value : faker.random.word();
    return new AuctionIncremento(incremento);
  }
}

export class AuctionArancelMother {
  static create(value?: string): AuctionArancel {
    const arancel = value ? value : faker.random.word();
    return new AuctionArancel(arancel);
  }
}

export class AuctionOblajeMother {
  static create(value?: string): AuctionOblaje {
    const oblaje = value ? value : faker.random.word();
    return new AuctionOblaje(oblaje);
  }
}

export class AuctionTipoInmuebleMother {
  static create(value?: string): AuctionTipoInmueble {
    const tipoInmueble = value ? value : faker.random.word();
    return new AuctionTipoInmueble(tipoInmueble);
  }
}

export class AuctionDireccionMother {
  static create(value?: string): AuctionDireccion {
    const direccion = value ? value : faker.random.word();
    return new AuctionDireccion(direccion);
  }
}

export class AuctionCargaGravamenMother {
  static create(value?: string): AuctionCargaGravamen {
    const cargaGravamen = value ? value : faker.random.word();
    return new AuctionCargaGravamen(cargaGravamen);
  }
}

export class AuctionPorcentajeMother {
  static create(value?: string): AuctionPorcentaje {
    const porcentaje = value ? value : faker.random.word();
    return new AuctionPorcentaje(porcentaje);
  }
}

export class AuctionPresentacionOfertaMother {
  static create(value?: string): AuctionPresentacionOferta {
    const presentacionOferta = value ? value : faker.random.word();
    return new AuctionPresentacionOferta(presentacionOferta);
  }
}

export class AuctionMother {
  static create(data?: AuctionDataInterface): Auction {
    return new Auction(
      AuctionIdMother.create(data?.id),
      AuctionExpedientMother.create(data?.expedient),
      AuctionJudicialDistrictMother.create(data?.judicialDistrict),
      AuctionDistrictMother.create(data?.district),
      AuctionProvinceMother.create(data?.province),
      AuctionDepartmentMother.create(data?.department),
      AuctionFechaResolucionMother.create(data?.fechaResolucion),
      AuctionDescriptionMother.create(data?.description),
      AuctionConvocatoriaMother.create(data?.convocatoria),
      AuctionTipoCambioMother.create(data?.tipoCambio),
      AuctionTasacionMother.create(data?.tasacion),
      AuctionPrecioBaseMother.create(data?.precioBase),
      AuctionIncrementoMother.create(data?.incremento),
      AuctionArancelMother.create(data?.arancel),
      AuctionOblajeMother.create(data?.oblaje),
      AuctionTipoInmuebleMother.create(data?.tipoInmueble),
      AuctionDireccionMother.create(data?.direccion),
      AuctionCargaGravamenMother.create(data?.cargaGravamen),
      AuctionPorcentajeMother.create(data?.porcentaje),
      AuctionPresentacionOfertaMother.create(data?.presentacionOferta),
    );
  }
}
