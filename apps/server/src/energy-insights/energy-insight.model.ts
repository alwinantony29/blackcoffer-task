import { prop } from '@typegoose/typegoose';

export class EnergyInsight {
  @prop({ required: true })
  added: string;
  @prop()
  country: string;
  @prop()
  end_year: string;
  @prop()
  impact: string;
  @prop()
  insight: string;
  @prop()
  intensity: number;
  @prop()
  likelihood: number;
  @prop()
  pestle: string;
  @prop()
  published: string;
  @prop()
  region: string;
  @prop()
  relevance: number;
  @prop()
  sector: string;
  @prop()
  source: string;
  @prop()
  start_year: string;
  @prop()
  title: string;
  @prop()
  topic: string;
  @prop()
  url: string;
}
