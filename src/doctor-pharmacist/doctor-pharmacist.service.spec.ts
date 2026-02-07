import { Test, TestingModule } from '@nestjs/testing';
import { DoctorPharmacistService } from './doctor-pharmacist.service';

describe('DoctorPharmacistService', () => {
  let service: DoctorPharmacistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DoctorPharmacistService],
    }).compile();

    service = module.get<DoctorPharmacistService>(DoctorPharmacistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
