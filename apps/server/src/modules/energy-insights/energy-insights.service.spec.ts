import { Test, TestingModule } from '@nestjs/testing';
import { EnergyInsightsService } from './energy-insights.service';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';

describe('EnergyInsightsService', () => {
  let service: EnergyInsightsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnergyInsightsService],
    }).compile();

    service = module.get<EnergyInsightsService>(EnergyInsightsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
