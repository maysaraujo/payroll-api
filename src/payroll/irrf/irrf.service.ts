import { Injectable } from '@nestjs/common';
import { roundMoney } from 'src/common/utils/money.utils';

@Injectable()
export class IrrfService {
  private readonly irrfTable = [
    { limit: 2428.8, rate: 0, deduction: 0 },
    { limit: 2826.65, rate: 0.075, deduction: 182.16 },
    { limit: 3751.05, rate: 0.15, deduction: 394.16 },
    { limit: 4664.68, rate: 0.225, deduction: 675.49 },
    { limit: Infinity, rate: 0.275, deduction: 908.73 },
  ];

  calculate(base: number): number {
    for (const item of this.irrfTable) {
      if (base <= item.limit) {
        const tax = base * item.rate - item.deduction;
        return tax > 0 ? roundMoney(tax) : 0;
      }
    }

    return 0;
  }
}
