import { Test, TestingModule } from '@nestjs/testing';
import { OnlineCustomerController } from './online-customer.controller';
import { OnlineCustomerService } from './online-customer.service';

describe('OnlineCustomerController', () => {
  let controller: OnlineCustomerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OnlineCustomerController],
      providers: [OnlineCustomerService],
    }).compile();

    controller = module.get<OnlineCustomerController>(OnlineCustomerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
