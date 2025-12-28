import { Controller, Post, Body } from '@nestjs/common';
import { PayrollService } from './payroll.service';
import { SalaryDto } from 'src/common/dtos/salary.dto';

@Controller('payroll')
export class PayrollController {
  constructor(private readonly payrollService: PayrollService) {}

  @Post('calculate')
  calculate(@Body() dto: SalaryDto) {
    return this.payrollService.calculate(dto.salary);
  }
}
