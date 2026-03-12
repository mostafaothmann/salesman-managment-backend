import { Test, TestingModule } from '@nestjs/testing';
import { GiftVisitController } from './gift-visit.controller';
import { GiftVisitService } from './gift-visit.service';

describe('GiftVisitController', () => {
  let controller: GiftVisitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GiftVisitController],
      providers: [GiftVisitService],
    }).compile();

    controller = module.get<GiftVisitController>(GiftVisitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
