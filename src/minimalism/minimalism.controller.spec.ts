import { Test, TestingModule } from '@nestjs/testing';
import { MinimalismController } from './minimalism.controller';
import { MinimalismService } from './minimalism.service';

describe('MinimalismController', () => {
  let controller: MinimalismController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MinimalismController],
      providers: [MinimalismService],
    }).compile();

    controller = module.get<MinimalismController>(MinimalismController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
