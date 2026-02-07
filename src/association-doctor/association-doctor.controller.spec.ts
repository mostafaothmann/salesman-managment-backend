import { Test, TestingModule } from '@nestjs/testing';
import { AssociationDoctorController } from './association-doctor.controller';
import { AssociationDoctorService } from './association-doctor.service';

describe('AssociationDoctorController', () => {
  let controller: AssociationDoctorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssociationDoctorController],
      providers: [AssociationDoctorService],
    }).compile();

    controller = module.get<AssociationDoctorController>(AssociationDoctorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
