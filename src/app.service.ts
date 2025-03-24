import { Injectable } from '@nestjs/common';
import * as ip from 'ip';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello from Docker!';
  }

  getHealth(): string {
    return 'I am healthy!';
  }

  getIP(): string {
    return `My IP is ${ip?.address()}`;
  }
}
