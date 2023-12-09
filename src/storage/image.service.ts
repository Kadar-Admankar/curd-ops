import { Injectable } from "@nestjs/common";
import axios from 'axios';
import * as fs from 'fs'

@Injectable()
export class ImageService{
    async downloadImage(url: string, destination: string): Promise<void>{
        const response = await axios.get(url, { responseType: 'stream' })
        // console.log("url response with data only", response.data)
        response.data.pipe(fs.createWriteStream(destination))
        console.log("url response with data after pipe only", response.data.pipe(fs.createWriteStream(destination)))
    }
}
