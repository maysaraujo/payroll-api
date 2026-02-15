import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { IrrfService } from './irrf.service';
import { SalaryDto } from 'src/common/dtos/salary.dto';
import { IrrfResponseDto } from './dto/irrf-response.dto';
import {
  ApiBody,
  ApiHeader,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateIrrfRuleDto } from './dto/create-irrf-rule.dto';
import { IrrfRuleService } from './irrf-rule.service';
import { ApiKeyGuard } from 'src/common/guards/api-key.guard';

@Controller('irrf')
@ApiTags('IRRF')
export class IrrfController {
  constructor(
    private readonly irrfService: IrrfService,
    private readonly irrfRuleService: IrrfRuleService,
  ) {}

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
  async calculate(@Body() dto: SalaryDto): Promise<IrrfResponseDto> {
    const irrf = await this.irrfService.calculateFromSalary(dto.salary);
    return { irrf };
  }

  @ApiHeader({
    name: 'x-api-key',
    description: 'API Key necessária para acessar este endpoint',
  })
  @UseGuards(ApiKeyGuard)
  @Post('rules')
  @ApiOperation({
    summary: 'Cria as regras do IRRF',
    description: 'Cria as regras do IRRF para o anual atual',
  })
  @ApiBody({ type: CreateIrrfRuleDto })
  create(@Body() dto: CreateIrrfRuleDto) {
    return this.irrfRuleService.createRules(dto);
  }
}
