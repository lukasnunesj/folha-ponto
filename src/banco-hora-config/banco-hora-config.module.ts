import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BancoHoraConfig } from './banco-hora-config.entity';
import { BancoHoraConfigController } from './banco-hora-config.controller';
import { BancoHoraConfigService } from './banco-hora-config.service';

@Module({
    imports: [TypeOrmModule.forFeature([BancoHoraConfig])],
    controllers: [BancoHoraConfigController],
    providers: [BancoHoraConfigService],
    exports: [TypeOrmModule]
})
export class BancoHoraConfigModule {}
