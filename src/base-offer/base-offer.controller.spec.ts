import { Test, TestingModule } from '@nestjs/testing';
import { BaseOfferController } from './base-offer.controller';
import { BaseOfferService } from './base-offer.service';

describe('BaseOfferController', () => {
  let controller: BaseOfferController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BaseOfferController],
      providers: [BaseOfferService],
    }).compile();

    controller = module.get<BaseOfferController>(BaseOfferController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
