import { Injectable } from '@nestjs/common';
import { roundMoney } from 'src/common/utils/money.utils';

@Injectable()
export class FgtsService {
  calculate(salary: number): number {
    return roundMoney(salary * 0.08);
  }
}
