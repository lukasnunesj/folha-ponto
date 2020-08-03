import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BancoHoras {
    @PrimaryGeneratedColumn()
    codigo: number;

}

