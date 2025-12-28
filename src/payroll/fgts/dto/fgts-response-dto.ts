import { ApiProperty } from '@nestjs/swagger';

export class FgtsResponseDto {
  @ApiProperty({
    description: 'Valor depositado no FGTS (8% do salário bruto).',
    example: 240,
  })
  fgts: number;
}
