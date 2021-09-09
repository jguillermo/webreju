import { validate } from 'class-validator';
import { AuctionPersistDto } from './auction-persist.dto';

describe('AuctionPersistDto', () => {
  describe('ok', () => {
    it('all correct', async () => {
      const dto = new AuctionPersistDto();
      dto.id = 'e42ce453-ca22-5311-914d-76b8c4461e2b';
      dto.expedient = 'expedient';
      dto.judicialDistrict = 'judicialDistrict';
      dto.district = 'district';
      dto.province = 'province';
      dto.department = 'department';
      dto.fechaResolucion = 'fechaResolucion';
      dto.description = 'description';
      dto.convocatoria = 'convocatoria';
      dto.tipoCambio = 'tipoCambio';
      dto.tasacion = 'tasacion';
      dto.precioBase = 'precioBase';
      dto.incremento = 'incremento';
      dto.arancel = 'arancel';
      dto.oblaje = 'oblaje';
      dto.tipoInmueble = 'tipoInmueble';
      dto.direccion = 'direccion';
      dto.cargaGravamen = 'cargaGravamen';
      dto.porcentaje = 'porcentaje';
      dto.presentacionOferta = 'presentacionOferta';
      const errors = await validate(dto);
      expect(errors.length).toEqual(0);
    });
  });
  describe('error', () => {
    it('params null', async () => {
      const dto = new AuctionPersistDto();
      const errors = await validate(dto);
      expect(errors.length).toEqual(20);
      //console.log(errors);
    });
  });
});
