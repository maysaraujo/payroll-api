import { Injectable } from '@nestjs/common';
import { InssService } from './inss/inss.service';

@Injectable()
export class PayrollService {
  constructor(private readonly inssService: InssService) {}

  calculate(salary: number) {
    const inss = this.inssService.calculate(salary);

    return {
      salary,
      inss,
      netSalary: salary - inss,
    };
  }
}
