import { Injectable } from '@nestjs/common';  // 

@Injectable()  // app service made injectable
export class AppService {   // app class created
  getHello(): string {   // get hello func with returning string
    return 'Hello World!';  
  }
}
