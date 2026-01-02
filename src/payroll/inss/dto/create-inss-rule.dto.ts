import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateInssTrackDto {
  @ApiProperty({ example: 1518 })
  @IsNumber()
  limit: number;

  @ApiProperty({ example: 0.075 })
  @IsNumber()
  rate: number;
}

export class CreateInssRuleDto {
  @ApiProperty({
    example: 2026,
    description: 'Ano Fiscal da regra',
  })
  @IsNumber()
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
