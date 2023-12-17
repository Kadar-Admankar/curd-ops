import { Body, Controller, Delete, Get, Logger, Param, Post, Put, Query } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Query as ExpressQuery} from 'express-serve-static-core';
import { LoggerService } from './logger/logger';


@Controller('books')
export class BookController {
        //  logger  = new Logger()    // logging by using inbuilt logger
    constructor(private bookService: BookService,
            private readonly logger: LoggerService,
        ) {}

    @Get()
    async getAllBooks(@Query() query: ExpressQuery ): Promise<Book[]>{
        return await this.bookService.findAll(query)
    }

    @Post()
    async createBook( @Body() book: CreateBookDto,) {
          // logging by using inbuilt logger
        this.bookService.create(book)
        this.logger.log('payload entered') 
    }

    @Get(':id')
    async getBook( @Param('id') id: string ): Promise<Book>{
        return this.bookService.findById(id)
    }

    @Put(':id')
    async updateBook( @Param('id') id: string, @Body() book: UpdateBookDto, ): Promise<Book>{
        return await this.bookService.updateById(id, book)
    }

    // @Delete(':id')
    // async deleteBook( @Param('id') id: string, ): Promise<Book | null> {
    //     return this.bookService.deleteById(id)
    // }
}
