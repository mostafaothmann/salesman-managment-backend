import { Test, TestingModule } from '@nestjs/testing';
import { HospitalPharmacistService } from './hospital-pharmacist.service';

describe('HospitalPharmacistService', () => {
  let service: HospitalPharmacistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HospitalPharmacistService],
    }).compile();

    service = module.get<HospitalPharmacistService>(HospitalPharmacistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
