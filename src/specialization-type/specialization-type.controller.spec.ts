import { Test, TestingModule } from '@nestjs/testing';
import { SpecializationTypeController } from './specialization-type.controller';
import { SpecializationTypeService } from './specialization-type.service';

describe('SpecializationTypeController', () => {
  let controller: SpecializationTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpecializationTypeController],
      providers: [SpecializationTypeService],
    }).compile();

    controller = module.get<SpecializationTypeController>(SpecializationTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
