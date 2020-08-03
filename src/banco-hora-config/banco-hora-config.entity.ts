import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'configuracoes'})
export class BancoHoraConfig {
    @PrimaryGeneratedColumn('increment')
    codigo: number;

    @Column()
    chave: string;

    @Column("varchar", {nullable: true})
    valor_texto?: string;

    @Column({nullable: true})
    valor_inteiro?: number;

    @Column("tinyint", {nullable: true})
    valor_booleano?: boolean;

    @Column("datetime", {nullable: true})
    valor_data?: string;
}
