import { Test, TestingModule } from '@nestjs/testing';
import { HospitalPharmacistController } from './hospital-pharmacist.controller';
import { HospitalPharmacistService } from './hospital-pharmacist.service';

describe('HospitalPharmacistController', () => {
  let controller: HospitalPharmacistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HospitalPharmacistController],
      providers: [HospitalPharmacistService],
    }).compile();

    controller = module.get<HospitalPharmacistController>(HospitalPharmacistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
