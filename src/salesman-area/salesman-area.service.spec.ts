import { Test, TestingModule } from '@nestjs/testing';
import { SalesmanAreaService } from './salesman-area.service';

describe('SalesmanAreaService', () => {
  let service: SalesmanAreaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SalesmanAreaService],
    }).compile();

    service = module.get<SalesmanAreaService>(SalesmanAreaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
