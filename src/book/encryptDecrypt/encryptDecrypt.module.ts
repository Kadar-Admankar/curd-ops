import { Module } from "@nestjs/common";
import { encryptDecryptController } from "./encryptDecrypt.controller";
import { CryptoService } from "./encryptDecrypt.service";


@Module({
    imports: [],
    controllers: [encryptDecryptController],
    providers: [CryptoService]
})

export class CryptoModule{}

