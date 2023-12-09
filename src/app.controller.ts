import { Controller, Get } from '@nestjs/common'; // all decorators in nestjs common
import { AppService } from './app.service';

@Controller()    // controller decorator used
export class AppController {   // app controller class created
  constructor(private readonly appService: AppService) {}    // 
  
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}


