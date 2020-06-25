import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { BancoHoraConfigService } from './banco-hora-config.service';
import { BancoHoraConfig } from './banco-hora-config.entity';

@Controller('banco-hora-config')
export class BancoHoraConfigController {
    constructor(
        private bancoHoraConfig: BancoHoraConfigService
    ){}

    @Get()
    getAll() {
        return this.bancoHoraConfig.getAll();
    }

    @Get(':chave')
    getKey(@Param('chave') chave: string){
        return this.bancoHoraConfig.getKey(chave);
    }

    @Post()
    setKey(@Body() configs: BancoHoraConfig){
        return this.bancoHoraConfig.setKey(configs);
    }

    @Delete(':chave')
    deleteKey(@Param('chave') chave: string) {
        return this.bancoHoraConfig.deleteKey(chave)
    }
}
