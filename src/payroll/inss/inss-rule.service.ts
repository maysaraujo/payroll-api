import { InjectModel } from '@nestjs/mongoose';
import { InssRule, InssRuleDocument } from './schemas/inss-rule.schema';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { CreateInssRuleDto } from './dto/create-inss-rule.dto';

@Injectable()
export class InssRuleService {
  constructor(
    @InjectModel(InssRule.name)
    private readonly ruleModel: Model<InssRuleDocument>,
  ) {}

  async getRulesForYear(year: number) {
    const rule = await this.ruleModel.findOne({ year }).exec();
    const existedRule = await this.ruleModel.findOne({ year: year });

    if (!rule) {
      console.error(`Nenhuma regra de INSS encontrada para o ano ${year}`);
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

  async createRules(dto: CreateInssRuleDto): Promise<InssRule> {
    return this.ruleModel.create(dto);
  }
}
