import { Test, TestingModule } from '@nestjs/testing';
import { BaseGiftService } from './base-gift.service';

describe('BaseGiftService', () => {
  let service: BaseGiftService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BaseGiftService],
    }).compile();

    service = module.get<BaseGiftService>(BaseGiftService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
