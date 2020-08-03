import { BancoHoraConfigService } from "./banco-hora-config.service";
import { BancoHoraConfig } from "./banco-hora-config.entity";
import { Repository, getRepository } from "typeorm";
import { TestingModule, Test } from "@nestjs/testing";
import { getRepositoryToken, TypeOrmModule } from "@nestjs/typeorm";

describe('Configurações do Banco de Horas', () => {
    describe('Banco Hora Config Controller', () => {
        let service: BancoHoraConfigService;
        let repo: Repository<BancoHoraConfig>;
        let module: TestingModule;

        beforeAll(async () => {
            const dotenv = require("dotenv");
            const fs = require("fs");

            const environment = process.env.NODE_ENV || 'development';
            const data = dotenv.parse(fs.readFileSync(`.env.${environment}`));

            module = await Test.createTestingModule({
                imports: [
                    TypeOrmModule.forRoot({
                        type: data.TYPEORM_TYPE || 'mysql',
                        host: data.TYPEORM_HOST,
                        port: Number.parseInt(data.TYPEORM_PORT),
                        username: data.TYPEORM_USERNAME,
                        password: data.TYPEORM_PASSWORD,
                        database: data.TYPEORM_DATABASE,
                        entities: [BancoHoraConfig],
                        synchronize: data.TYPEORM_SYNCHRONIZE === 'true'
                    }),
                    TypeOrmModule.forFeature([BancoHoraConfig])
                ],
                providers: [
                    BancoHoraConfigService
                ]
            }).compile();

            service = module.get<BancoHoraConfigService>(BancoHoraConfigService);
            repo = module.get<Repository<BancoHoraConfig>>(getRepositoryToken(BancoHoraConfig));
        });

        afterAll(async () => {
            module.close();
        });

        it("should be defined", () => {
            expect(service).toBeDefined();
        });
        
        it('should have the repo mocked', () => {
            expect(typeof repo.find).toBe('function');
        });

        it("deve salvar uma configuracao do Banco de Horas", async () => {
            let configRepo = getRepository(BancoHoraConfig);
            const config = configRepo.create({
                'chave': 'teste_1',
                'valor_inteiro': 1
            });
            console.log(config)

            await service.setKey(config);
            const key = service.getKey('teste_1');
            expect(key).toBe(config.valor_inteiro);

        });
    });
})