import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(email: string): string {
    return 'Hello ' + email + '!';
  }
}
