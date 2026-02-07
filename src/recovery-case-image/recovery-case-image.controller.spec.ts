import { Test, TestingModule } from '@nestjs/testing';
import { RecoveryCaseImageController } from './recovery-case-image.controller';
import { RecoveryCaseImageService } from './recovery-case-image.service';

describe('RecoveryCaseImageController', () => {
  let controller: RecoveryCaseImageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecoveryCaseImageController],
      providers: [RecoveryCaseImageService],
    }).compile();

    controller = module.get<RecoveryCaseImageController>(RecoveryCaseImageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
