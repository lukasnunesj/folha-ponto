import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BancoHoraConfig } from './banco-hora-config.entity';

@Injectable()
export class BancoHoraConfigService {
    constructor(
        @InjectRepository(BancoHoraConfig)
        private bancoHorasRepository: Repository<BancoHoraConfig>,
    ) {}

    getAll(): Promise<BancoHoraConfig[]> {
        return this.bancoHorasRepository.find();
    }

    getKey(chave: string): Promise<BancoHoraConfig[]>{
        return this.bancoHorasRepository.find({
            where: {
                chave: chave
            }
        });
    }

    async setKey(configs: BancoHoraConfig): Promise<BancoHoraConfig>{
        let configExistente = await this.bancoHorasRepository.findOne({chave: configs.chave});
        if(!configExistente) {
            return this.bancoHorasRepository.save(configs);
        } else {

            configExistente.chave = configs.chave;
            configExistente.valor_texto = configs.valor_texto;
            configExistente.valor_inteiro = configs.valor_inteiro;
            configExistente.valor_booleano = configs.valor_booleano;
            configExistente.valor_data = configs.valor_data;
            return this.bancoHorasRepository.save(configExistente);
        }
    }

    async deleteKey(chave: string): Promise<void>{
        let config = await this.bancoHorasRepository.findOne({where:{chave:chave}});
        await this.bancoHorasRepository.delete(config.codigo);
        
    }
}
