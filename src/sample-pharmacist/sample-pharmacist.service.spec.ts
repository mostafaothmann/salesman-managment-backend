import { Test, TestingModule } from '@nestjs/testing';
import { SamplePharmacistService } from './sample-pharmacist.service';

describe('SamplePharmacistService', () => {
  let service: SamplePharmacistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SamplePharmacistService],
    }).compile();

    service = module.get<SamplePharmacistService>(SamplePharmacistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
