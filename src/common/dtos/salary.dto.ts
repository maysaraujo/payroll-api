import { IsNumber, IsPositive } from 'class-validator';

export class SalaryDto {
  @IsNumber()
  @IsPositive()
  salary: number;
}
