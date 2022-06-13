import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

const moment = require('moment');
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
    
    @Column({ name: 'is_active', default: true })
    isActive: boolean;
    
    @Column({ name: 'create_at', default:  moment().format('YYYY-MM-DD hh:mm:ss')})
    createAt: string;
    
    @Column({ name: 'update_at', default:  moment().format('YYYY-MM-DD hh:mm:ss'), onUpdate: moment().format('YYYY-MM-DD hh:mm:ss')})
    updateAt: Date;
}