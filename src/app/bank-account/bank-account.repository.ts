import { randAccount } from "@ngneat/falso";
import { AppDataSource } from "../../config/data-source";
import { Id } from "../../config/declarations";
import { BankAccountType, WireTransferType } from "../../config/enums";
import { BankAccount } from "../entities/bank-account.entity";
import { create as createWireTransfer } from '../wire-transfer/wire-transfer.repository';

interface BankAccountDTO {
    bankId: number;
    customerId: number;
    type: BankAccountType,
    initialDeposit: number;
}

export const create = async (data: BankAccountDTO): Promise<BankAccount> => {
    const repository = AppDataSource.getRepository(BankAccount);

    //First: create our bank account with a current amount equal to 0
    const bankAccount = {
        accountNumber: parseInt(randAccount()),
        bankId: data.bankId,
        customerId: data.customerId,
        type: data.type,
    }

    repository.create(bankAccount);
    const bankcAccountCreation = await repository.save(bankAccount);


    //Second: create our first deposit using wire transactions repository

    const firstDeposit = {
        amount: data.initialDeposit,
        bankId: bankcAccountCreation.bankId,
        customerId: bankcAccountCreation.customerId,
        bankAccountId: bankcAccountCreation.id,
        sourceAccount: bankAccount.accountNumber,
        destinationAccount: bankAccount.accountNumber,
        type: WireTransferType.FIRST_DEPOSIT_FOR_ACCOUNT_OPENNING
    };

    console.log(firstDeposit);

    const transfer = await createWireTransfer(firstDeposit);
    console.log(transfer);

    //Third: update our bank account info
    const result = await repository.save({
        id: bankcAccountCreation.id,
        currentAccountBalance: data.initialDeposit,
        bankId: bankcAccountCreation.bankId,
        customerId: bankcAccountCreation.customerId,
        bankAccountId: bankcAccountCreation.id,
        sourceAccount: bankAccount.accountNumber,
        destinationAccount: bankAccount.accountNumber,
    });

    return result;
}

export const list = async (): Promise<BankAccount[]> => {
    const repository = AppDataSource.getRepository(BankAccount);

    return repository.find();
}

export const getById = async (id: number): Promise<BankAccount> => {
    const repository = AppDataSource.getRepository(BankAccount);
    const bankAccount = await repository.findOneBy({ id });

    if (!bankAccount) {
        throw new Error("BankAccount does not exist");
    }

    return bankAccount;
}

export const getByCustomerId = async (customerId: number): Promise<BankAccount[]> => {
    const repository = AppDataSource.getRepository(BankAccount);

    return await repository.findBy({ customerId });
}

export const getByAccountNumber = async(accountNumber: number): Promise<BankAccount> => {
    const repository = AppDataSource.getRepository(BankAccount);

    const bankAccount = await repository.findOneBy({ accountNumber });

    if (!bankAccount) {
        throw new Error("BankAccount does not exist");
    }

    return bankAccount;
}

export const update = async (id: number, data: Partial<BankAccount>): Promise<BankAccount | null> => {
    const repository = AppDataSource.getRepository(BankAccount);

    await repository.update({ id }, data )

    const result = await repository.findOneBy({ id });
    return result;
}