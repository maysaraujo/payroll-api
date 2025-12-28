import { Controller, Post, Body } from '@nestjs/common';
import { IrrfService } from './irrf.service';
import { SalaryDto } from 'src/common/dtos/salary.dto';
import { IrrfResponseDto } from './dto/irrf-response-.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('irrf')
@ApiTags('IRRF')
export class IrrfController {
  constructor(private readonly irrfService: IrrfService) {}

  @Post('calculate')
  @ApiOperation({
    summary: 'Calcula o IRRF',
    description:
      'Recebe um salário bruto, calcula o INSS, obtém a base e retorna o IRRF segundo a tabela progressiva oficial.',
  })
  @ApiBody({ type: SalaryDto })
  @ApiResponse({
    status: 201,
    description: 'IRRF calculado com sucesso.',
    type: IrrfResponseDto,
    examples: {
      resultado3000: {
        summary: 'Retorno para salário de R$ 3.000',
        value: { irff: 23.83 },
      },
    },
  })
  calculate(@Body() dto: SalaryDto): IrrfResponseDto {
    return { irrf: this.irrfService.calculateFromSalary(dto.salary) };
  }
}
