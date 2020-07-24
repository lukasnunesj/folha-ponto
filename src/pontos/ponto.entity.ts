import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'pontos'})
export class Ponto {
    @PrimaryGeneratedColumn()
    codigo: number;

    @Column()
    ponto: number;

    @Column("char", {length:1})
    tipo: string;

    @Column("int")
    codigo_funcionario: number;

    @Column("int")
    codigo_banco_horas: string;
}

