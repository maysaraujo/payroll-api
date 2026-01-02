import { Injectable } from '@nestjs/common';
import { roundMoney } from 'src/common/utils/money.utils';
import { InssService } from '../inss/inss.service';
import { IrrfTracks } from './schemas/irrf-rule.schema';
import { IrrfRuleService } from './irrf-rule.service';

@Injectable()
export class IrrfService {
  constructor(
    private readonly inssService: InssService,
    private readonly irrfRuleService: IrrfRuleService,
  ) {}

  calculate(base: number, tracks: IrrfTracks[]): number {
    for (const item of tracks) {
      if (base <= item.limit) {
        const tax = base * item.rate - item.deduction;
        return tax > 0 ? roundMoney(tax) : 0;
      }
    }

    return 0;
  }

  async calculateFromSalary(salary: number) {
    const inss = await this.inssService.calculate(salary);
    const base = salary - inss;
    const ruleTracks = await this.irrfRuleService.getCurrentRules();
    const tracks = ruleTracks?.tracks || [];

    return this.calculate(base, tracks);
  }
}
