import { Controller, Post, Body } from '@nestjs/common';
import { FgtsService } from './fgts.service';
import { SalaryDto } from 'src/common/dtos/salary.dto';
import { FgtsResponseDto } from './dto/fgts-response-dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('fgts')
@ApiTags('FGTS')
export class FgtsController {
  constructor(private readonly fgtsService: FgtsService) {}

  @Post('calculate')
  @ApiOperation({
    summary: 'Calcula o FGTS',
    description:
      'Retorna 8% do salário bruto, valor depositado mensalmente no FGTS.',
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
    description: 'FGTS calculado com sucesso.',
    type: FgtsResponseDto,
    examples: {
      resultado3000: {
        summary: 'Retorno para salário de R$ 3.000',
        value: { fgts: 240 },
      },
    },
  })
  calculate(@Body() dto: SalaryDto): FgtsResponseDto {
    return { fgts: this.fgtsService.calculate(dto.salary) };
  }
}
