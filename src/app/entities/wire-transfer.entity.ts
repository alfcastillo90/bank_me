import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'wire_transfers' })
export class WireTransfer {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    amount: number;
    @Column({ name: 'source_account' })
    sourceAccount: number;
    @Column({ name: 'destination_account' })
    destinationAccount: number;
    @Column()
    message: string;
    @Column()
    date: Date;
    @Column()
    type: string;
    @Column({ name: 'create_at' })
    createAt: Date;
    @Column({ name: 'update_at' })
    updateAt: Date;
}