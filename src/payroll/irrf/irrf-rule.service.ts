import { InjectModel } from '@nestjs/mongoose';
import { IrrfRule, IrrfRuleDocument } from './schemas/irrf-rule.schema';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { CreateIrrfRuleDto } from './dto/create-irrf-rule.dto';

@Injectable()
export class IrrfRuleService {
  constructor(
    @InjectModel(IrrfRule.name)
    private readonly ruleModel: Model<IrrfRuleDocument>,
  ) {}

  async getRulesForYear(year: number) {
    const rule = await this.ruleModel.findOne({ year }).exec();
    const existedRule = await this.ruleModel.findOne({ year: year });

    if (!rule) {
      console.error(`Nenhuma regra de IRRF encontrada para o ano ${year}`);
    }

    if (existedRule) {
      console.error(`Já existe uma regra para o ano ${year}`);
    }

    return rule;
  }

  async getCurrentRules() {
    const currentYear = new Date().getFullYear();

    return this.getRulesForYear(currentYear);
  }

  async createRules(dto: CreateIrrfRuleDto): Promise<IrrfRule> {
    return this.ruleModel.create(dto);
  }
}
