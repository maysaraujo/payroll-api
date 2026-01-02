import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type IrrfRuleDocument = IrrfRule & mongoose.Document;

@Schema()
export class IrrfTracks extends mongoose.Document {
  @Prop({ type: mongoose.Schema.Types.Number, required: true })
  limit: number;

  @Prop({ type: mongoose.Schema.Types.Number, required: true })
  rate: number;

  @Prop({ type: mongoose.Schema.Types.Number, required: true })
  deduction: number;
}

@Schema({ timestamps: true })
export class IrrfRule {
  @Prop({ type: mongoose.Schema.Types.Number, required: true })
  year: number;

  @Prop({ type: mongoose.Schema.Types.Array })
  tracks: IrrfTracks[];
}

export const IrrfRuleSchema = SchemaFactory.createForClass(IrrfRule);
