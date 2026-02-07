import { Test, TestingModule } from '@nestjs/testing';
import { AssosiationController } from './association.controller';
import { AssosiationService } from './association.service';

describe('AssosiationController', () => {
  let controller: AssosiationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssosiationController],
      providers: [AssosiationService],
    }).compile();

    controller = module.get<AssosiationController>(AssosiationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
