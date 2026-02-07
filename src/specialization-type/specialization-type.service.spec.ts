import { Test, TestingModule } from '@nestjs/testing';
import { SpecializationTypeService } from './specialization-type.service';

describe('SpecializationTypeService', () => {
  let service: SpecializationTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpecializationTypeService],
    }).compile();

    service = module.get<SpecializationTypeService>(SpecializationTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
