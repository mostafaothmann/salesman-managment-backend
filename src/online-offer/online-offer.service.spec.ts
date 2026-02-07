import { Test, TestingModule } from '@nestjs/testing';
import { OnlineOfferService } from './online-offer.service';

describe('OnlineOfferService', () => {
  let service: OnlineOfferService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OnlineOfferService],
    }).compile();

    service = module.get<OnlineOfferService>(OnlineOfferService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
