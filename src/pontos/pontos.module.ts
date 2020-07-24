import { PontosController } from './pontos.controller';
import { Module } from '@nestjs/common';
import { Ponto } from './ponto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PontosService } from './pontos.service';

@Module({
    imports: [TypeOrmModule.forFeature([Ponto])],
    controllers: [PontosController],
    exports: [TypeOrmModule],
    providers: [PontosService],
})
export class PontosModule {}
