import { Test, TestingModule } from '@nestjs/testing';
import { SamplePharmacistController } from './sample-pharmacist.controller';
import { SamplePharmacistService } from './sample-pharmacist.service';

describe('SamplePharmacistController', () => {
  let controller: SamplePharmacistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SamplePharmacistController],
      providers: [SamplePharmacistService],
    }).compile();

    controller = module.get<SamplePharmacistController>(SamplePharmacistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
