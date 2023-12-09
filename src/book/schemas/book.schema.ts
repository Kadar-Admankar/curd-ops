import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

// enum category created
export enum Category {
    ADVENTURE = 'Adventure',
    CLASSICS = 'Classics',
    CRIME = 'Crime',
    FANTASY = 'Fantasy'
}

// schema with timestamp
@Schema({
    timestamps: true
})

// Book Schema
export class Book {

    @Prop()
    title:string;

    @Prop()
    description:string;

    @Prop()
    author:string;

    @Prop()
    price:number;

    @Prop()
    category:Category;
}

export const BookSchema = SchemaFactory.createForClass(Book)   //BookSchema created