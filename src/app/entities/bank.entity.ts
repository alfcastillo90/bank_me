import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BankAccount } from "./bank-account.entity";
import { WireTransfer } from "./wire-transfer.entity";

const moment = require('moment');

@Entity({ name: 'banks' })
export class Bank {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @Column({ name: 'create_at', default:  moment().format('YYYY-MM-DD hh:mm:ss')})
    createAt: string;

    @OneToMany(() => BankAccount, (bankAccount: BankAccount) => bankAccount.bankId, { eager: true, cascade: true }) 
    bankAccounts: BankAccount[];

    @OneToMany(() => WireTransfer, (wireTransfer: WireTransfer) => wireTransfer.bankId, { eager: true, cascade: true }) 
    wireTransfers: WireTransfer[]
}