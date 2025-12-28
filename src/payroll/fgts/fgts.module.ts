import { Module } from '@nestjs/common';
import { FgtsService } from './fgts.service';
import { FgtsController } from './fgts.controller';

@Module({
  controllers: [FgtsController],
  providers: [FgtsService],
})
export class FgtsModule {}
