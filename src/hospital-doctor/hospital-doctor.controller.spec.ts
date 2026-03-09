import { Test, TestingModule } from '@nestjs/testing';
import { HospitalDoctorController } from './hospital-doctor.controller';
import { HospitalDoctorService } from './hospital-doctor.service';

describe('HospitalDoctorController', () => {
  let controller: HospitalDoctorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HospitalDoctorController],
      providers: [HospitalDoctorService],
    }).compile();

    controller = module.get<HospitalDoctorController>(HospitalDoctorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
