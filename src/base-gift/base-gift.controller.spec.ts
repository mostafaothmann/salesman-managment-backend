import { Test, TestingModule } from '@nestjs/testing';
import { BaseGiftController } from './base-gift.controller';
import { BaseGiftService } from './base-gift.service';

describe('BaseGiftController', () => {
  let controller: BaseGiftController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BaseGiftController],
      providers: [BaseGiftService],
    }).compile();

    controller = module.get<BaseGiftController>(BaseGiftController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
