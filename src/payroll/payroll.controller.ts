import { Controller, Post, Body } from '@nestjs/common';
import { PayrollService } from './payroll.service';
import { SalaryDto } from 'src/common/dtos/salary.dto';
import { PayrollResultDto } from './dto/payroll-result.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('payroll')
@ApiTags('Payroll')
export class PayrollController {
  constructor(private readonly payrollService: PayrollService) {}

  @Post('calculate')
  @ApiOperation({
    summary: 'Calcula folha completa',
    description:
      'Retorna o cálculo completo incluindo INSS, IRRF, FGTS e o salário líquido.',
  })
  @ApiBody({
    type: SalaryDto,
    examples: {
      exemplo3000: {
        summary: 'Salário de R$ 3.000',
        value: { salary: 3000 },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Folha calculada com sucesso.',
    type: PayrollResultDto,
    examples: {
      resultado3000: {
        summary: 'Folha completa para salário de R$ 3.000',
        value: {
          salary: 3000,
          inss: 253.41,
          irrf: 23.83,
          fgts: 240,
          netSalary: 2722.76,
        },
      },
    },
  })
  calculate(@Body() dto: SalaryDto): PayrollResultDto {
    return this.payrollService.calculate(dto.salary);
  }
}
