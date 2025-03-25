import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as statusMonitor from 'express-status-monitor';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const monitorOptions = {
    path: '/status', // this is the endpoint you'll hit (http://localhost:3000/status)
  };

  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 4000;

  app.use(statusMonitor(monitorOptions));
  await app.listen(port);
}
bootstrap();
