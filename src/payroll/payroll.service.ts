import { Injectable } from '@nestjs/common';
import { InssService } from './inss/inss.service';
import { IrrfService } from './irrf/irrf.service';
import { roundMoney } from 'src/common/utils/money.utils';
import { FgtsService } from './fgts/fgts.service';

@Injectable()
export class PayrollService {
  constructor(
    private readonly inssService: InssService,
    private readonly irrfService: IrrfService,
    private readonly fgtsService: FgtsService,
  ) {}

  calculate(salary: number) {
    const inss = this.inssService.calculate(salary);
    const base = salary - inss;
    const irrf = this.irrfService.calculate(base);
    const netSalary = roundMoney(salary - inss - irrf);
    const fgts = this.fgtsService.calculate(salary);

    return {
      salary,
      inss,
      irrf,
      fgts,
      netSalary,
    };
  }
}
