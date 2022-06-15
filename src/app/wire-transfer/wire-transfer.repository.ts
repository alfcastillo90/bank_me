import { AppDataSource } from "../../config/data-source";
import { Id } from "../../config/declarations";
import { WireTransferType } from "../../config/enums";
import { WireTransfer } from "../entities/wire-transfer.entity";
import { getByAccountNumber, update as updateBankAccount } from '../bank-account/bank-account.repository';

interface WireTransferDTO {
    bankId: number;
    bankAccountId: number;
    customerId: number;
    amount: number;
    sourceAccount: number;
    destinationAccount: number;
    message?: string;
    type: WireTransferType
}

export const create = async (data: WireTransferDTO): Promise<WireTransfer>  => {
    //first: register wire trtansfer
    const repository = AppDataSource.getRepository(WireTransfer);

    const wireTransfer = repository.create(data);

    await repository.save(wireTransfer);
    //second: update current accounts balances
    const sourceAccount = await getByAccountNumber(data.sourceAccount);
    const destinationAccount = await getByAccountNumber(data.destinationAccount);

    const newSourceAccountBalance = sourceAccount.currentAccountBalance - data.amount;
    const newDestinationAccountBalance = destinationAccount.currentAccountBalance - data.amount;

    await updateBankAccount(sourceAccount.id, { currentAccountBalance: newSourceAccountBalance })
    await updateBankAccount(destinationAccount.id, { currentAccountBalance: newDestinationAccountBalance })
    

    return wireTransfer;
}

export const list = async(): Promise<WireTransfer[]> => {
    const repository = AppDataSource.getRepository(WireTransfer);

    return repository.find();
}

export const getById = async(id: Id): Promise<WireTransfer> => {
    const repository = AppDataSource.getRepository(WireTransfer);
    const wireTransfer = await repository.findOneBy({ id: id as number});

    if (!wireTransfer) {
        throw new Error("WireTransfer does not exist");
    }

    return wireTransfer;
}

export const getByBankId = async(bankId: Id): Promise<WireTransfer[]> => {
    const repository = AppDataSource.getRepository(WireTransfer);
    
    return await repository.findBy({ bankId: bankId as number});
}

export const getByCustomerId = async(customerId: Id): Promise<WireTransfer[]> => {
    const repository = AppDataSource.getRepository(WireTransfer);
    
    return await repository.findBy({ customerId: customerId as number});
}