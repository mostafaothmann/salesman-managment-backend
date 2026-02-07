import { Test, TestingModule } from '@nestjs/testing';
import { PharmacistVisitService } from './pharmacist-visit.service';

describe('PharmacistVisitService', () => {
  let service: PharmacistVisitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PharmacistVisitService],
    }).compile();

    service = module.get<PharmacistVisitService>(PharmacistVisitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
