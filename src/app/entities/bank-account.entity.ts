import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BankAccountType } from "../../config/enums";
import { Bank } from "./bank.entity";
import { Customer } from "./customer.entity";
import { WireTransfer } from "./wire-transfer.entity";
const moment = require('moment');

@Entity({ name: 'bank_accounts' })
export class BankAccount {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ name: 'bank_id' })
    bankId: number;
    
    @Column({ name: 'customer_id' })
    customerId: number;
    
    @Column()
    type: BankAccountType;
    
    @Column({ name: 'account_number' })
    accountNumber: number;
    
    @Column({ name: 'current_account_balance', default: 0 })
    currentAccountBalance: number;
    
    @Column({ name: 'is_active', default: true })
    isActive: boolean;

    @Column({ name: 'create_at', default:  moment().format('YYYY-MM-DD hh:mm:ss')})
    createAt: string;
    
    @Column({ name: 'update_at', default:  moment().format('YYYY-MM-DD hh:mm:ss'), onUpdate: moment().format('YYYY-MM-DD hh:mm:ss')})
    updateAt: string;

    @ManyToOne(() => Bank, (bank: Bank) => bank.bankAccounts)
    @JoinColumn({ name: 'bank_id', referencedColumnName: 'id' })
    bank: Bank;

    @ManyToOne(() => Customer, (customer: Customer) => customer.bankAccounts)
    @JoinColumn({ name: 'customer_id', referencedColumnName: 'id' })
    customer: Customer;

    @OneToMany(() => WireTransfer, (wireTransfer: WireTransfer) => wireTransfer.sourceAccount) 
    wireTransfers: WireTransfer[]
}