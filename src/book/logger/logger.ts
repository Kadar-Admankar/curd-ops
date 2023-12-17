import { Injectable } from '@nestjs/common';
import * as winston from 'winston';
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
// import { Log } from '../schemas/log.schema';
import { LogModel } from '../schemas/log.schema';

@Injectable()
export class LoggerService {
  private readonly logger: winston.Logger;

  constructor() {
    
    this.logger = winston.createLogger({
      level: 'info',
      format: winston.format.json(),
      transports: [
        new winston.transports.Console(),
      ],
    });
  }

  async log(message: string) {
    const logEntry = new LogModel({
      message,
      level: 'info',
    });

    await logEntry.save();
    this.logger.log({ level: 'info', message});
  }

  async error(message: string, trace: string, context?: string) {
    const logEntry = new LogModel({
      message,
      level: 'error',
    });

    await logEntry.save();
    this.logger.error({ message, trace, context });
  }

  // Add other log levels or custom methods as needed
}


// import { Injectable } from '@nestjs/common';
// import * as winston from 'winston'


// @Injectable()
// export class LoggerService {
//     private readonly logger: winston.Logger;
  
//     constructor() {
//       this.logger = winston.createLogger({
//         level: 'info', // Set your desired log level
//         format: winston.format.json(),
//         transports: [
//           new winston.transports.Console(),
//           // Add other transports if needed, e.g., file transport
//           new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
//         ],
//       });
//     }
//     log(message: string, context?: string) {
//         this.logger.log({ level: 'info', message, context });
//       }
    
//       error(message: string, trace: string, context?: string) {
//         this.logger.error({ message, trace, context });
//       }
    
//       // Add other log levels or custom methods as needed

// }