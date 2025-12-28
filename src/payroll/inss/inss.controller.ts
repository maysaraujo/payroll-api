import { Controller, Post, Body } from '@nestjs/common';
import { InssService } from './inss.service';
import { SalaryDto } from 'src/common/dtos/salary.dto';
import { InssResponseDto } from './dto/inss-response.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('inss')
@ApiTags('INSS')
export class InssController {
  constructor(private readonly inssService: InssService) {}

  @Post('calculate')
  @ApiOperation({
    summary: 'Calcula o INSS',
    description:
      'Recebe um salário bruto e retorna o valor de INSS segundo as faixas progressivas oficiais.',
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
    description: 'INSS calculado com sucesso.',
    type: InssResponseDto,
    examples: {
      resultado3000: {
        summary: 'Retorno para salário de R$ 3.000',
        value: { inss: 253.41 },
      },
    },
  })
  calculate(@Body() dto: SalaryDto): InssResponseDto {
    return { inss: this.inssService.calculate(dto.salary) };
  }
}
