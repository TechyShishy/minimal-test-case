import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MinimalismModule } from './minimalism/minimalism.module';

@Module({
  imports: [MinimalismModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
