import { Injectable } from '@nestjs/common';
import { roundMoney } from 'src/common/utils/money.utils';
import { InssRuleService } from './inss-rule.service';

@Injectable()
export class InssService {
  constructor(private readonly inssRuleService: InssRuleService) {}

  async calculate(salary: number): Promise<number> {
    const rule = await this.inssRuleService.getCurrentRules();
    const tracks = rule?.tracks;

    let remainingSalary = salary;
    let totalInss = 0;
    let previousLimit = 0;

    if (!rule || !rule.tracks) {
      throw new Error('Nenhuma regra de INSS cadastrada para o ano atual.');
    }

    for (const track of tracks ?? []) {
      if (remainingSalary <= 0) break;

      const currentTrack = track.limit - previousLimit;
      const taxableAmount = Math.min(currentTrack, remainingSalary);
      totalInss += taxableAmount * track.rate;
      remainingSalary -= taxableAmount;
      previousLimit = track.limit;
    }

    return roundMoney(totalInss);
  }
}
