import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

const moment = require('moment');

@Entity({ name: 'banks' })
export class Bank {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @Column({ name: 'create_at', default:  moment().format('YYYY-MM-DD hh:mm:ss')})
    createAt: string;
}