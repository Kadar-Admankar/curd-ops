import { Controller, Get } from "@nestjs/common";
import { CryptoService } from "./encryptDecrypt.service";


@Controller()
export class encryptDecryptController{
    
    constructor(
        private readonly cryptoService: CryptoService
    ){}
    @Get('encrypt')
    async encrypt():Promise<string>{
        const data = 'Hello World'
             const result = this.cryptoService.encrypt(data)
             console.log('ecrypted data :', result)
             console.log('ecrypted data type of :', typeof result)
             const decryptResult = this.cryptoService.decrypt(result)
              console.log('decrypted data:', decryptResult)
        return `encrypt decrypt done`
    }

    // @Get('decrypt')
    // async decrypt():Promise<string>{
    //     const data = '963164aac4837dc681caada6bd2df78c'
    //     const result = this.cryptoService.decrypt(data)
    //       console.log('decrypt data: ', result)
    //     return `decrypt data: ${result}`
    // }
}