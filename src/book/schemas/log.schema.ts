import * as mongoose from 'mongoose';

// export interface Log extends mongoose.Document {
//   level: string;
//   message: string;
//   timestamp: Date;
// }

// export const LogModel = mongoose.model<Log>('Log', new mongoose.Schema({
//   level: String,
//   message: String,
//   timestamp: {
//     type: Date,
//     default: Date.now,
//   },
// }));

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


// schema with timestamp
@Schema({
    timestamps: true
})

// Book Schema
export class Log {

    @Prop()
    level:string;

    @Prop()
    message:string;

}

export const LogSchema = SchemaFactory.createForClass(Log) 
export const LogModel = mongoose.model<Log>('Log', LogSchema)