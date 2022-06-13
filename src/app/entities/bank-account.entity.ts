import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Bank } from "./bank.entity";
import { Customer } from "./customer.entity";
const moment = require('moment');

@Entity({ name: 'bank_accounts' })
export class BankAccount {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ name: 'bank_account_id' })
    bankId: number;
    
    @Column({ name: 'customer_id' })
    customerId: number;
    
    @Column()
    type: string;
    
    @Column({ name: 'account_number' })
    accountNumber: number;
    
    @Column({ name: 'current_account_balance' })
    currentAccountBalance: number;
    
    @Column({ name: 'is_active', default: true })
    isActive: boolean;

    @Column({ name: 'create_at', default:  moment().format('YYYY-MM-DD hh:mm:ss')})
    createAt: string;
    
    @Column({ name: 'update_at', default:  moment().format('YYYY-MM-DD hh:mm:ss'), onUpdate: moment().format('YYYY-MM-DD hh:mm:ss')})
    updateAt: string;

    @ManyToOne(() => Bank, (bank: Bank) => bank.bankAccounts)
    bank: Bank;

    @ManyToOne(() => Customer, (customer: Customer) => customer.bankAccounts)
    customer: Customer;
}