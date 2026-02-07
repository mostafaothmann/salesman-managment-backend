import { Test, TestingModule } from '@nestjs/testing';
import { RecoveryCaseController } from './recovery-case.controller';
import { RecoveryCaseService } from './recovery-case.service';

describe('RecoveryCaseController', () => {
  let controller: RecoveryCaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecoveryCaseController],
      providers: [RecoveryCaseService],
    }).compile();

    controller = module.get<RecoveryCaseController>(RecoveryCaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
