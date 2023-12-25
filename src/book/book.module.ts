import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from './schemas/book.schema';
import { LoggerService } from './logger/logger';
import { LogModel, LogSchema } from './schemas/log.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Book', schema: BookSchema}, { name: 'Log', schema: LogSchema}])],   // in BookModule book collection and bookSchema mentioned
  controllers: [BookController],
  providers: [BookService, LoggerService, LogModel]
})
export class BookModule {}
