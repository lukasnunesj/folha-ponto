import { Module } from '@nestjs/common';
import { BancosHorasController } from './bancos-horas.controller';

@Module({
  controllers: [BancosHorasController]
})
export class BancosHorasModule {}
