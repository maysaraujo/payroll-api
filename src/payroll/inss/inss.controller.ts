import { Controller, Post, Body } from '@nestjs/common';
import { InssService } from './inss.service';
import { SalaryDto } from 'src/common/dtos/salary.dto';

@Controller('inss')
export class InssController {
  constructor(private readonly inssService: InssService) {}

  @Post('calculate')
  calculate(@Body() dto: SalaryDto) {
    return this.inssService.calculate(dto.salary);
  }
}
