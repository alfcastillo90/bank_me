import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'banks' })
export class Bank {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column({ name: 'create_at' })
    createAt: Date;
    @Column({ name: 'update_at' })
    updateAt: Date;
}