import { Controller, Post, Body } from '@nestjs/common';
import { PayrollService } from './payroll.service';
import { InssService } from './inss/inss.service';

@Controller('payroll')
export class PayrollController {
  constructor(
    private readonly payrollService: PayrollService,
    private readonly inssService: InssService,
  ) {}

  @Post('calculate')
  calculate(@Body() body: { salary: number }) {
    return this.payrollService.calculate(body.salary);
  }
}
