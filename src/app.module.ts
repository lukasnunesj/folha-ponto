import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BancoHoraConfig } from './banco-hora-config/banco-hora-config.entity';
import { PontoModule } from './ponto/ponto.module';
import { BancoHoraConfigModule } from './banco-hora-config/banco-hora-config.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'folhaponto',
      entities: [BancoHoraConfig],
      synchronize: true,
    }),
    PontoModule,
    BancoHoraConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
