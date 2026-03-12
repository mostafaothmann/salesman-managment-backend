import { Test, TestingModule } from '@nestjs/testing';
import { SalesmanMessageService } from './salesman-message.service';

describe('SalesmanMessageService', () => {
  let service: SalesmanMessageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SalesmanMessageService],
    }).compile();

    service = module.get<SalesmanMessageService>(SalesmanMessageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
