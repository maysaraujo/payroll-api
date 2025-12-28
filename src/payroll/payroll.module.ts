import { Module } from '@nestjs/common';
import { PayrollService } from './payroll.service';
import { PayrollController } from './payroll.controller';
import { InssModule } from './inss/inss.module';
import { InssService } from './inss/inss.service';
import { IrrfModule } from './irrf/irrf.module';
import { IrrfService } from './irrf/irrf.service';
import { FgtsModule } from './fgts/fgts.module';
import { FgtsService } from './fgts/fgts.service';

@Module({
  controllers: [PayrollController],
  providers: [PayrollService, InssService, IrrfService, FgtsService],
  imports: [InssModule, IrrfModule, FgtsModule],
})
export class PayrollModule {}
