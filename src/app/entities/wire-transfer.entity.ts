import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { WireTransferType } from "../../config/enums";
import { BankAccount } from "./bank-account.entity";
import { Bank } from "./bank.entity";
import { Customer } from "./customer.entity";

const moment = require('moment');

@Entity({ name: 'wire_transfers' })
export class WireTransfer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'bank_id' })
    bankId: number;

    @Column({ name: 'bank_account_id' })
    bankAccountId: number;

    @Column({ name: 'customer_id' })
    customerId: number;
    
    @Column()
    amount: number;
    
    @Column({ name: 'source_account', nullable: true })
    sourceAccount: number;
    
    @Column({ name: 'destination_account' })
    destinationAccount: number;
    
    @Column({ nullable: true })
    message: string;
    
    @Column()
    type: WireTransferType;
    
    @Column({ name: 'create_at', default:  moment().format('YYYY-MM-DD hh:mm:ss')})
    createAt: string;
    
    @Column({ name: 'update_at', default:  moment().format('YYYY-MM-DD hh:mm:ss'), onUpdate: moment().format('YYYY-MM-DD hh:mm:ss')})
    updateAt: string;

    @ManyToOne(() => Bank, (bank: Bank) => bank.bankAccounts)
    @JoinColumn({ name: 'bank_id', referencedColumnName: 'id' })
    bank: Bank;

    @ManyToOne(() => Customer, (customer: Customer) => customer.wireTransfers)
    @JoinColumn({ name: 'customer_id', referencedColumnName: 'id' })
    customer: Customer;

    @ManyToOne(() => BankAccount, (bankAccount: BankAccount) => bankAccount.wireTransfers)
    @JoinColumn({ name: 'bank_account_id', referencedColumnName: 'id' })
    bankAccount: BankAccount;
}