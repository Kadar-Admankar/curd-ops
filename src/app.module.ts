import { Module } from '@nestjs/common';   // nestjs common having all decorators
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ImageModule } from './storage/image.module';
import { CryptoModule } from './book/encryptDecrypt/encryptDecrypt.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal:true
    }),  // .env config file imported
    MongooseModule.forRoot(process.env.DB_URI),  // db uri imported
    BookModule,
    ImageModule,
    CryptoModule
  ],
  controllers: [AppController], // app controller
  providers: [AppService],   // app service provided
})
export class AppModule {} // AppModule exported
