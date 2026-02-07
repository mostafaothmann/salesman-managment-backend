import { Test, TestingModule } from '@nestjs/testing';
import { DoctorVisitService } from './doctor-visit.service';

describe('DoctorVisitService', () => {
  let service: DoctorVisitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DoctorVisitService],
    }).compile();

    service = module.get<DoctorVisitService>(DoctorVisitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
