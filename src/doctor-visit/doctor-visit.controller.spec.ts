import { Test, TestingModule } from '@nestjs/testing';
import { DoctorVisitController } from './doctor-visit.controller';
import { DoctorVisitService } from './doctor-visit.service';

describe('DoctorVisitController', () => {
  let controller: DoctorVisitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DoctorVisitController],
      providers: [DoctorVisitService],
    }).compile();

    controller = module.get<DoctorVisitController>(DoctorVisitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
