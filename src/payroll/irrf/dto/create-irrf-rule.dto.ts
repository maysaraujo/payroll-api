import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, Min, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateIrrfTrackDto {
  @ApiProperty({ example: 2826.65 })
  @IsNumber({}, { message: 'O valor deve ser um número' })
  @Min(0, { message: 'O valor deve ser maior ou igual a 0' })
  limit: number;

  @ApiProperty({ example: 0.075 })
  @IsNumber({}, { message: 'O valor deve ser um número' })
  @Min(0, { message: 'O valor deve ser maior ou igual a 0' })
  rate: number;

  @ApiProperty({ example: 182.16 })
  @IsNumber({}, { message: 'O valor deve ser um número' })
  @Min(0, { message: 'O valor deve ser maior ou igual a 0' })
  deduction: number;
}

export class CreateIrrfRuleDto {
  @ApiProperty({
    example: 2026,
    description: 'Ano Fiscal da regra',
  })
  @IsNumber({}, { message: 'O ano deve ser um número' })
  @Min(0, { message: 'O ano deve ser maior ou igual a 0' })
  year: number;

  @ApiProperty({
    type: [CreateIrrfTrackDto],
    description: 'Tabelas progressivas do IRRF',
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateIrrfTrackDto)
  tracks: CreateIrrfTrackDto[];
}
