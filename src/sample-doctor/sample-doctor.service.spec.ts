import { Test, TestingModule } from '@nestjs/testing';
import { SampleDoctorService } from './sample-doctor.service';

describe('SampleDoctorService', () => {
  let service: SampleDoctorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SampleDoctorService],
    }).compile();

    service = module.get<SampleDoctorService>(SampleDoctorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
