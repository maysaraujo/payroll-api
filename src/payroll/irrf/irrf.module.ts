import { Module } from '@nestjs/common';
import { IrrfService } from './irrf.service';
import { IrrfController } from './irrf.controller';
import { InssService } from '../inss/inss.service';

@Module({
  controllers: [IrrfController],
  providers: [IrrfService, InssService],
})
export class IrrfModule {}
