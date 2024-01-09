import { Test, TestingModule } from '@nestjs/testing';
import { MinimalismService } from './minimalism.service';

describe('MinimalismService', () => {
  let service: MinimalismService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MinimalismService],
    }).compile();

    service = module.get<MinimalismService>(MinimalismService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
