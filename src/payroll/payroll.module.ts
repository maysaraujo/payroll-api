import { Module } from '@nestjs/common';
import { PayrollService } from './payroll.service';
import { PayrollController } from './payroll.controller';
import { InssModule } from './inss/inss.module';
import { InssService } from './inss/inss.service';
import { IrrfModule } from './irrf/irrf.module';
import { IrrfService } from './irrf/irrf.service';

@Module({
  controllers: [PayrollController],
  providers: [PayrollService, InssService, IrrfService],
  imports: [InssModule, IrrfModule],
})
export class PayrollModule {}
