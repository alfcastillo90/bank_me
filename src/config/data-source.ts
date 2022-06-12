import { DataSource } from "typeorm";
import { BankAccount } from "../app/entities/bank-account.entity";
import { Bank } from "../app/entities/bank.entity";
import { Customer } from "../app/entities/customer.entity";
import { WireTransfer } from "../app/entities/wire-transfer.entity";
import environment from "./environment";

enum database {
    SQLITE = 'sqlite',
}


export const AppDataSource = new DataSource({
    type: database.SQLITE,
    database: `./${environment.databaseName}`,
    synchronize: true,
    logging: true,
    entities: [Bank, BankAccount, Customer, WireTransfer],
    subscribers: [],
    migrations: [],
})