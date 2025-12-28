import { Module } from '@nestjs/common';
import { PayrollService } from './payroll.service';
import { PayrollController } from './payroll.controller';
import { InssModule } from './inss/inss.module';
import { InssService } from './inss/inss.service';

@Module({
  controllers: [PayrollController],
  providers: [PayrollService, InssService],
  imports: [InssModule],
})
export class PayrollModule {}
