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
        let existantConfig = await this.bancoHorasRepository.findOne({chave: configs.chave});
        if(!existantConfig) {
            return this.bancoHorasRepository.save(configs);
        } else {

            existantConfig.chave = configs.chave;
            existantConfig.valor_texto = configs.valor_texto;
            existantConfig.valor_inteiro = configs.valor_inteiro;
            existantConfig.valor_booleano = configs.valor_booleano;
            existantConfig.valor_data = configs.valor_data;
            return this.bancoHorasRepository.save(existantConfig);
        }
    }

    async deleteKey(chave: string): Promise<void>{
        let config = await this.bancoHorasRepository.findOne({where:{chave:chave}});
        await this.bancoHorasRepository.delete(config.codigo);
        
    }
}
