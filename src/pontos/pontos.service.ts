import { Ponto } from './ponto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class PontosService {
    constructor(
        @InjectRepository(Ponto)
        private pontoRepository: Repository<Ponto>,
    ) {}

    savePonto(ponto: Ponto): Promise<Ponto>{
        const novo_ponto = new Ponto();
        novo_ponto.tipo = ponto.tipo;
        novo_ponto.ponto = ponto.ponto;
        novo_ponto.codigo_banco_horas = ponto.codigo_banco_horas;
        novo_ponto.codigo_funcionario = ponto.codigo_funcionario;

        return this.pontoRepository.save(novo_ponto);
    }

    listarTodosOsPontos(): Promise<Ponto[]> {
        return this.pontoRepository.find();
    }
}
