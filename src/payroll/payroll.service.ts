import { Injectable } from '@nestjs/common';
import { InssService } from './inss/inss.service';
import { IrrfService } from './irrf/irrf.service';
import { roundMoney } from 'src/common/utils/money.utils';
import { FgtsService } from './fgts/fgts.service';
import { IrrfRuleService } from './irrf/irrf-rule.service';

@Injectable()
export class PayrollService {
  constructor(
    private readonly inssService: InssService,
    private readonly irrfService: IrrfService,
    private readonly irrfRuleService: IrrfRuleService,
    private readonly fgtsService: FgtsService,
  ) {}

  async calculate(salary: number) {
    const inss = await this.inssService.calculate(salary);
    const base = salary - inss;
    const ruleTracks = await this.irrfRuleService.getCurrentRules();
    const tracks = ruleTracks?.tracks || [];
    const irrf = this.irrfService.calculate(base, tracks);
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
