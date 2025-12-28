import { Controller, Post, Body } from '@nestjs/common';
import { FgtsService } from './fgts.service';
import { SalaryDto } from 'src/common/dtos/salary.dto';

@Controller('fgts')
export class FgtsController {
  constructor(private readonly fgtsService: FgtsService) {}

  @Post('calculate')
  calculate(@Body() dto: SalaryDto) {
    return this.fgtsService.calculate(dto.salary);
  }
}
