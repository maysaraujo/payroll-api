import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, Min } from 'class-validator';

export class SalaryDto {
  @ApiProperty({
    description: 'Salário bruto informado pelo usuário.',
    example: 3000,
  })
  @IsNumber({}, { message: 'O salário deve ser um número' })
  @Min(0, { message: 'O salário deve ser maior ou igual a 0' })
  salary: number;
}
