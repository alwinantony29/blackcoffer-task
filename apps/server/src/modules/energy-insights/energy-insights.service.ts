import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EnergyInsight } from './energy-insight.model';

@Injectable()
export class EnergyInsightsService {
  constructor(
    @InjectModel(EnergyInsight.name)
    private readonly energyInsightModel: Model<EnergyInsight>,
  ) {}
  async findAll(): Promise<EnergyInsight[]> {
    return this.energyInsightModel.find().exec();
  }
}
