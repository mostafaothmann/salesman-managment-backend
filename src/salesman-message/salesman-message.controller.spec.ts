import { Test, TestingModule } from '@nestjs/testing';
import { SalesmanMessageController } from './salesman-message.controller';
import { SalesmanMessageService } from './salesman-message.service';

describe('SalesmanMessageController', () => {
  let controller: SalesmanMessageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SalesmanMessageController],
      providers: [SalesmanMessageService],
    }).compile();

    controller = module.get<SalesmanMessageController>(SalesmanMessageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
