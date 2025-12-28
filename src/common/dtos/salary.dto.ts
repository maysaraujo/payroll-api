import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive } from 'class-validator';

export class SalaryDto {
  @ApiProperty({
    description: 'Salário bruto informado pelo usuário.',
    example: 3000,
  })
  @IsNumber()
  @IsPositive()
  salary: number;
}
