import { Controller, Get } from '@nestjs/common';
import { EnergyInsightsService } from './energy-insights.service';
import { EnergyInsight } from './energy-insight.model';

@Controller('energy-insights')
export class EnergyInsightsController {
  constructor(private readonly energyInsightService: EnergyInsightsService) {}
  @Get()
  async findAll(): Promise<EnergyInsight[]> {
    return this.energyInsightService.findAll();
  }
}
