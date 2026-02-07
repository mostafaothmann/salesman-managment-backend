import { Test, TestingModule } from '@nestjs/testing';
import { AssociationDoctorService } from './association-doctor.service';

describe('AssociationDoctorService', () => {
  let service: AssociationDoctorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssociationDoctorService],
    }).compile();

    service = module.get<AssociationDoctorService>(AssociationDoctorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
