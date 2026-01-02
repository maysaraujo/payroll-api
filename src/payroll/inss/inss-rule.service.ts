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
    return this.ruleModel.findOne({ year }).exec();
  }

  async getCurrentRules() {
    const currentYear = new Date().getFullYear();

    return this.getRulesForYear(currentYear);
  }

  async createRules(dto: CreateInssRuleDto): Promise<InssRule> {
    return this.ruleModel.create(dto);
  }
}
