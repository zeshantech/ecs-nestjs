import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as statusMonitor from 'express-status-monitor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const monitorOptions = {
    path: '/status', // this is the endpoint you'll hit (http://localhost:3000/status)
  };

  app.use(statusMonitor(monitorOptions));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
