import { Module } from '@nestjs/common';
import { EnergyInsightsController } from './energy-insights.controller';
import { EnergyInsightsService } from './energy-insights.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { EnergyInsight } from './energy-insight.model';

@Module({
  imports: [TypegooseModule.forFeature([EnergyInsight])],
  controllers: [EnergyInsightsController],
  providers: [EnergyInsightsService],
})
export class EnergyInsightsModule {}
