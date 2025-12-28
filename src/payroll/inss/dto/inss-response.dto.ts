import { ApiProperty } from '@nestjs/swagger';

export class InssResponseDto {
  @ApiProperty({
    description: 'Valor do INSS calculado com base nas faixas progressivas.',
    example: 253.41,
  })
  inss: number;
}
