import { Module } from '@nestjs/common';
import { InssService } from './inss.service';
import { InssController } from './inss.controller';
import { InssRule, InssRuleSchema } from './schemas/inss-rule.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { InssRuleService } from './inss-rule.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: InssRule.name, schema: InssRuleSchema },
    ]),
  ],
  controllers: [InssController],
  providers: [InssService, InssRuleService],
  exports: [InssService, InssRuleService],
})
export class InssModule {}
