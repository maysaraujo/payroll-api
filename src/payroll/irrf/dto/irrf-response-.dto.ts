import { ApiProperty } from '@nestjs/swagger';

export class IrrfResponseDto {
  @ApiProperty({
    description: 'Valor do IRRF calculado após descontar o INSS.',
    example: 23.83,
  })
  irrf: number;
}
