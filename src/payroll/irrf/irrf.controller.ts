import { Controller, Post, Body } from '@nestjs/common';
import { IrrfService } from './irrf.service';
import { SalaryDto } from 'src/common/dtos/salary.dto';

@Controller('irrf')
export class IrrfController {
  constructor(private readonly irrfService: IrrfService) {}

  @Post('calculate')
  calculate(@Body() dto: SalaryDto) {
    return this.irrfService.calculateFromSalary(dto.salary);
  }
}
