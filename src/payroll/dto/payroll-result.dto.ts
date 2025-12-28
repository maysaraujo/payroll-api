import { ApiProperty } from '@nestjs/swagger';

export class PayrollResultDto {
  @ApiProperty({
    description: 'Salário bruto enviado pelo usuário.',
    example: 3000,
  })
  salary: number;

  @ApiProperty({
    description: 'Valor do INSS calculado.',
    example: 253.41,
  })
  inss: number;

  @ApiProperty({ description: 'Valor do IRRF calculado.', example: 23.83 })
  irrf: number;

  @ApiProperty({
    description: 'Valor do FGTS calculado (8% do salário).',
    example: 240,
  })
  fgts: number;

  @ApiProperty({
    description: 'Salário líquido após descontos.',
    example: 2722.76,
  })
  netSalary: number;
}
