import { Test, TestingModule } from '@nestjs/testing';
import { SampleDoctorController } from './sample-doctor.controller';
import { SampleDoctorService } from './sample-doctor.service';

describe('SampleDoctorController', () => {
  let controller: SampleDoctorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SampleDoctorController],
      providers: [SampleDoctorService],
    }).compile();

    controller = module.get<SampleDoctorController>(SampleDoctorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
