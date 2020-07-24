import { Controller, Post, Body, Get } from '@nestjs/common';
import { Ponto } from './ponto.entity';
import { PontosService } from './pontos.service';

@Controller('pontos')
export class PontosController {
    constructor(
        private pontosService: PontosService
    ){}
    
    @Get()
    trazerTodosOsPontos() {
        return this.pontosService.listarTodosOsPontos();
    }

    @Post()
    savePonto(@Body() ponto: Ponto){
        return this.pontosService.savePonto(ponto);
    }
}
