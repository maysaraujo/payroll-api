import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, Min, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateInssTrackDto {
  @ApiProperty({ example: 1518 })
  @IsNumber({}, { message: 'O valor deve ser um número' })
  @Min(0, { message: 'O valor deve ser maior ou igual a 0' })
  limit: number;

  @ApiProperty({ example: 0.075 })
  @IsNumber({}, { message: 'O valor deve ser um número' })
  @Min(0, { message: 'O valor deve ser maior ou igual a 0' })
  rate: number;
}

export class CreateInssRuleDto {
  @ApiProperty({
    example: 2026,
    description: 'Ano Fiscal da regra',
  })
  @IsNumber()
  @IsNumber({}, { message: 'O ano deve ser um número' })
  @Min(0, { message: 'O ano deve ser maior ou igual a 0' })
  year: number;

  @ApiProperty({
    type: [CreateInssTrackDto],
    description: 'Faixas progressivas do INSS',
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateInssTrackDto)
  tracks: CreateInssTrackDto[];
}
