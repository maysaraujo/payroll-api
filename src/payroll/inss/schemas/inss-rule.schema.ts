import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type InssRuleDocument = InssRule & mongoose.Document;

@Schema()
export class InssTracks extends mongoose.Document {
  @Prop({ type: mongoose.Schema.Types.Number, required: true })
  limit: number;

  @Prop({ type: mongoose.Schema.Types.Number, required: true })
  rate: number;
}

@Schema({ timestamps: true })
export class InssRule {
  @Prop({ type: mongoose.Schema.Types.Number, required: true })
  year: number;

  @Prop({ type: mongoose.Schema.Types.Array })
  tracks: InssTracks[];
}

export const InssRuleSchema = SchemaFactory.createForClass(InssRule);
