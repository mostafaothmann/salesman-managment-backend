import { Test, TestingModule } from '@nestjs/testing';
import { PharmacistVisitController } from './pharmacist-visit.controller';
import { PharmacistVisitService } from './pharmacist-visit.service';

describe('PharmacistVisitController', () => {
  let controller: PharmacistVisitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PharmacistVisitController],
      providers: [PharmacistVisitService],
    }).compile();

    controller = module.get<PharmacistVisitController>(PharmacistVisitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
