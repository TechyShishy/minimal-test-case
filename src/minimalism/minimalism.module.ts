import { Module } from '@nestjs/common';
import { MinimalismService } from './minimalism.service';
import { MinimalismController } from './minimalism.controller';

@Module({
  controllers: [MinimalismController],
  providers: [MinimalismService],
})
export class MinimalismModule {}
