import { Controller, Get } from "@nestjs/common";
import { ImageService } from "./image.service";

@Controller('images')
export class ImageController {
    constructor(private readonly imageService: ImageService) {}

    @Get('download')
    async downloadImage(): Promise<string> {
        const imageUrl = 'https://picsum.photos/200/300';
        const destinationPath = "./src/uploads/" + Date.now() + ".jpg";
        try {
            await this.imageService.downloadImage(imageUrl, destinationPath)
            return `Image downloaded and saved at ${destinationPath}`
        } catch (error) {
            return `Error Downloading image: ${error.message}`
        }
    }
}