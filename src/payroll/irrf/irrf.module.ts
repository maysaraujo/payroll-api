import { Module } from '@nestjs/common';
import { IrrfService } from './irrf.service';
import { IrrfController } from './irrf.controller';

@Module({
  controllers: [IrrfController],
  providers: [IrrfService],
})
export class IrrfModule {}
