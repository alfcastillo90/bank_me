import { NotFound } from "http-errors";
import { AppDataSource } from "../../config/data-source";
import { Id } from "../../config/declarations";
import { Bank } from "../entities/bank.entity";

export const createBank = async (data: Bank): Promise<Bank>  => {
    const repository = AppDataSource.getRepository(Bank);

    const bank = repository.create(data);

    await repository.save(bank);

    return bank;
}

export const list = async(): Promise<Bank[]> => {
    const repository = AppDataSource.getRepository(Bank);

    return repository.find();
}

export const getById = async(id: Id): Promise<Bank> => {
    const repository = AppDataSource.getRepository(Bank);
    const bank = await repository.findOneBy({ id: id as number});

    if (!bank) {
        throw new NotFound("Task does not exist");
    }

    return bank;
}