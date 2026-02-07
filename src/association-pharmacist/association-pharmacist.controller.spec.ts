import { Test, TestingModule } from '@nestjs/testing';
import { AssociationPharmacistController } from './association-pharmacist.controller';
import { AssociationPharmacistService } from './association-pharmacist.service';

describe('AssociationPharmacistController', () => {
  let controller: AssociationPharmacistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssociationPharmacistController],
      providers: [AssociationPharmacistService],
    }).compile();

    controller = module.get<AssociationPharmacistController>(AssociationPharmacistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
