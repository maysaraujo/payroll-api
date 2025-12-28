import { Injectable } from '@nestjs/common';
import { roundMoney } from 'src/common/utils/money.utils';

@Injectable()
export class InssService {
  private readonly inssTracks = [
    { limit: 1518, rate: 0.075 },
    { limit: 2793.88, rate: 0.09 },
    { limit: 4190.83, rate: 0.12 },
    { limit: 8157.41, rate: 0.14 },
  ];

  calculate(salary: number): number {
    let remainingSalary = salary;
    let totalInss = 0;
    let previousLimit = 0;

    for (const track of this.inssTracks) {
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
