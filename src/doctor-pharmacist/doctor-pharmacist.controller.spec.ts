import { Test, TestingModule } from '@nestjs/testing';
import { DoctorPharmacistController } from './doctor-pharmacist.controller';
import { DoctorPharmacistService } from './doctor-pharmacist.service';

describe('DoctorPharmacistController', () => {
  let controller: DoctorPharmacistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DoctorPharmacistController],
      providers: [DoctorPharmacistService],
    }).compile();

    controller = module.get<DoctorPharmacistController>(DoctorPharmacistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
