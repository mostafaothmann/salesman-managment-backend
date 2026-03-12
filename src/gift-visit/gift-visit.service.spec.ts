import { Test, TestingModule } from '@nestjs/testing';
import { GiftVisitService } from './gift-visit.service';

describe('GiftVisitService', () => {
  let service: GiftVisitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GiftVisitService],
    }).compile();

    service = module.get<GiftVisitService>(GiftVisitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
