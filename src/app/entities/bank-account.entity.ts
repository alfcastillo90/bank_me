import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'bank_accounts' })
export class BankAccount {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ name: 'bank_account_id' })
    bankAccountId: number;
    @Column({ name: 'customer_id' })
    customerId: number;
    @Column()
    type: string;
    @Column({ name: 'account_number' })
    accountNumber: number;
    @Column({ name: 'current_account_balance' })
    currentAccountBalance: number;
    @Column({ name: 'create_at' })
    createAt: Date;
    @Column({ name: 'update_at' })
    updateAt: Date;
}