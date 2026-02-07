import { Test, TestingModule } from '@nestjs/testing';
import { AssosiationService } from './association.service';

describe('AssosiationService', () => {
  let service: AssosiationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssosiationService],
    }).compile();

    service = module.get<AssosiationService>(AssosiationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
