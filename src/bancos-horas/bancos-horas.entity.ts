import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'configuracoes'})
export class BancoHoraConfig {
    @PrimaryGeneratedColumn()
    codigo: number;

    @Column()
    chave: string;

    @Column("varchar")
    valor_texto: string;

    @Column()
    valor_inteiro: number;

    @Column("tinyint")
    valor_booleano: boolean;

    @Column("datetime")
    valor_data: string;
}

