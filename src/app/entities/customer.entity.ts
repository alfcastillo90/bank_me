import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'customers' })
export class Customer {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    lastname: string;
    @Column()
    email: string;
    @Column()
    phone: string;
    @Column()
    address: string;
    @Column()
    company: string;
    @Column()
    job: string;
    @Column({ name: 'create_at' })
    createAt: Date;
    @Column({ name: 'update_at' })
    updateAt: Date;
}