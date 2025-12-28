import { Module } from '@nestjs/common';
import { InssService } from './inss.service';
import { InssController } from './inss.controller';

@Module({
  controllers: [InssController],
  providers: [InssService],
})
export class InssModule {}
