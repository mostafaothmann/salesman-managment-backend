import { Test, TestingModule } from '@nestjs/testing';
import { RecoveryCaseImageService } from './recovery-case-image.service';

describe('RecoveryCaseImageService', () => {
  let service: RecoveryCaseImageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecoveryCaseImageService],
    }).compile();

    service = module.get<RecoveryCaseImageService>(RecoveryCaseImageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
