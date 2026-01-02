import { Module } from '@nestjs/common';
import { IrrfService } from './irrf.service';
import { IrrfController } from './irrf.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { IrrfRule, IrrfRuleSchema } from './schemas/irrf-rule.schema';
import { InssModule } from '../inss/inss.module';
import { IrrfRuleService } from './irrf-rule.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: IrrfRule.name, schema: IrrfRuleSchema },
    ]),
    InssModule,
  ],
  controllers: [IrrfController],
  providers: [IrrfService, IrrfRuleService],
  exports: [IrrfRuleService],
})
export class IrrfModule {}
