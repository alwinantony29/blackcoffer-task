import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { EnergyInsightsModule } from './energy-insights/energy-insights.module';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypegooseModule.forRoot(
      'mongodb+srv://Atlas1234:Atlas123@cluster0.ysimyt6.mongodb.net/black-coffer?retryWrites=true&w=majority',
    ),
    EnergyInsightsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
