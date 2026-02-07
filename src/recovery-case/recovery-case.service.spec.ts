import { Test, TestingModule } from '@nestjs/testing';
import { RecoveryCaseService } from './recovery-case.service';

describe('RecoveryCaseService', () => {
  let service: RecoveryCaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecoveryCaseService],
    }).compile();

    service = module.get<RecoveryCaseService>(RecoveryCaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
