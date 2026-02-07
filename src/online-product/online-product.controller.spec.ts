import { Test, TestingModule } from '@nestjs/testing';
import { OnlineProductController } from './online-product.controller';
import { OnlineProductService } from './online-product.service';

describe('OnlineProductController', () => {
  let controller: OnlineProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OnlineProductController],
      providers: [OnlineProductService],
    }).compile();

    controller = module.get<OnlineProductController>(OnlineProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
