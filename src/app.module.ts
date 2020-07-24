import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PontosModule } from './pontos/pontos.module';
import { BancoHoraConfigModule } from './banco-hora-config/banco-hora-config.module';
import { PontosController } from './pontos/pontos.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    PontosModule,
    BancoHoraConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
