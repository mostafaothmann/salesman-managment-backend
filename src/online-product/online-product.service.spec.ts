import { Test, TestingModule } from '@nestjs/testing';
import { OnlineProductService } from './online-product.service';

describe('OnlineProductService', () => {
  let service: OnlineProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OnlineProductService],
    }).compile();

    service = module.get<OnlineProductService>(OnlineProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
