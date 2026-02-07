import { Test, TestingModule } from '@nestjs/testing';
import { OnlineCustomerService } from './online-customer.service';

describe('OnlineCustomerService', () => {
  let service: OnlineCustomerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OnlineCustomerService],
    }).compile();

    service = module.get<OnlineCustomerService>(OnlineCustomerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
