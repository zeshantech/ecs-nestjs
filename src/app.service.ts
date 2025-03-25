import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as ip from 'ip';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  getHello(): string {
    return 'Hello from Docker!';
  }

  getHealth(): string {
    return 'I am healthy!';
  }

  getIP(): string {
    return `My IP is ${ip?.address()}`;
  }

  getConfig() {
    return {
      PORT: this.configService.get('PORT'),
      DATABASE_URL: this.configService.get('DATABASE_URL'),
      NODE_ENV: this.configService.get('NODE_ENV'),
    };
  }
}
