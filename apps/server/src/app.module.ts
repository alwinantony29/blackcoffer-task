import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { EnergyInsightsModule } from './energy-insights/energy-insights.module';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypegooseModule.forRoot('mongodb://localhost:27017/blackcoffer/'),
    EnergyInsightsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
