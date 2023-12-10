import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Book } from './schemas/book.schema';
import { Query } from 'express-serve-static-core';

@Injectable()
export class BookService {
    constructor(   // constructor created for book model
        @InjectModel(Book.name)
        private bookModel: mongoose.Model<Book>
    ){}

    async findAll(query :Query): Promise<Book[]> {     //  find all func of returning Promise of array of books
        console.log(query)   // query contains params value // query will give object that we passed through params
   //  params - { keyword: 'book 3', keyword1: 'book' }
       const resPerPage = 2
       const currentPage = Number(query.page) || 1
       const skip = resPerPage * (currentPage - 1)

        const keyword = query.keyword ? {  
          title: {
            $regex: query.keyword,
            $options: 'i'
          }
        } : {}
        const books = await this.bookModel.find({ ...keyword }).limit(resPerPage).skip(skip)
        return books
    }

    async create(book:Book): Promise<Book>{    // create func
        const res = await this.bookModel.create(book)
        return res
    }
    
    async findById(id:string): Promise<Book>{
        const isValidId = mongoose.isValidObjectId(id)
        if(!isValidId){
            throw new BadRequestException('Please enter correct Id')
        }

        const book = await this.bookModel.findById(id) // written query in services
        if(!book){
            throw new NotFoundException('Book not found')
        }
        return book
    }

    async updateById(id:string, book:Book): Promise<Book>{
        return await this.bookModel.findByIdAndUpdate(id, book, {
            new: true,
            runValidators: true
        })
    }

    async deleteById(id:string): Promise<Book>{
        return await this.bookModel.findByIdAndDelete(id)
    }
}
