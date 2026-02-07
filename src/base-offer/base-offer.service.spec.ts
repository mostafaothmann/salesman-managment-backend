import { Test, TestingModule } from '@nestjs/testing';
import { BaseOfferService } from './base-offer.service';

describe('BaseOfferService', () => {
  let service: BaseOfferService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BaseOfferService],
    }).compile();

    service = module.get<BaseOfferService>(BaseOfferService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
