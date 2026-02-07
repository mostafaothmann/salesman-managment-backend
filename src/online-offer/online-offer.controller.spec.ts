import { Test, TestingModule } from '@nestjs/testing';
import { OnlineOfferController } from './online-offer.controller';
import { OnlineOfferService } from './online-offer.service';

describe('OnlineOfferController', () => {
  let controller: OnlineOfferController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OnlineOfferController],
      providers: [OnlineOfferService],
    }).compile();

    controller = module.get<OnlineOfferController>(OnlineOfferController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
