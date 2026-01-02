import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateIrrfTrackDto {
  @ApiProperty({ example: 2826.65 })
  @IsNumber()
  limit: number;

  @ApiProperty({ example: 0.075 })
  @IsNumber()
  rate: number;

  @ApiProperty({ example: 182.16 })
  @IsNumber()
  deduction: number;
}

export class CreateIrrfRuleDto {
  @ApiProperty({
    example: 2026,
    description: 'Ano Fiscal da regra',
  })
  @IsNumber()
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
