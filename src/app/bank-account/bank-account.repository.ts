import { AppDataSource } from "../../config/data-source";
import { Id } from "../../config/declarations";
import { BankAccount } from "../entities/bank-account.entity";

export const create = async (data: BankAccount): Promise<BankAccount>  => {
    const repository = AppDataSource.getRepository(BankAccount);

    const bankAccount = repository.create(data);

    await repository.save(bankAccount);

    return bankAccount;
}

export const list = async(): Promise<BankAccount[]> => {
    const repository = AppDataSource.getRepository(BankAccount);

    return repository.find();
}

export const getById = async(id: Id): Promise<BankAccount> => {
    const repository = AppDataSource.getRepository(BankAccount);
    const bankAccount = await repository.findOneBy({ id: id as number});

    if (!bankAccount) {
        throw new Error("BankAccount does not exist");
    }

    return bankAccount;
}

export const getByCustomerId = async(customerId: Id): Promise<BankAccount[]> => {
    const repository = AppDataSource.getRepository(BankAccount);
    
    return await repository.findBy({ customerId: customerId as number});
}

export const update = async (id: Id, data: Partial<BankAccount>): Promise<BankAccount>  => {
    const repository = AppDataSource.getRepository(BankAccount);

    const bankAccount = await repository.update({ id: id as number }, data);
    
    return bankAccount.raw[0];
}