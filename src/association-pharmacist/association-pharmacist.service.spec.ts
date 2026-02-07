import { Test, TestingModule } from '@nestjs/testing';
import { AssociationPharmacistService } from './association-pharmacist.service';

describe('AssociationPharmacistService', () => {
  let service: AssociationPharmacistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssociationPharmacistService],
    }).compile();

    service = module.get<AssociationPharmacistService>(AssociationPharmacistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
