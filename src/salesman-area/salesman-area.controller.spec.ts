import { Test, TestingModule } from '@nestjs/testing';
import { SalesmanAreaController } from './salesman-area.controller';
import { SalesmanAreaService } from './salesman-area.service';

describe('SalesmanAreaController', () => {
  let controller: SalesmanAreaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SalesmanAreaController],
      providers: [SalesmanAreaService],
    }).compile();

    controller = module.get<SalesmanAreaController>(SalesmanAreaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
