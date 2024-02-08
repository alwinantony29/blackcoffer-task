import { Test, TestingModule } from '@nestjs/testing';
import { EnergyInsightsController } from './energy-insights.controller';

describe('EnergyInsightsController', () => {
  let controller: EnergyInsightsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnergyInsightsController],
    }).compile();

    controller = module.get<EnergyInsightsController>(EnergyInsightsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
