import { AppDataSource } from "../../config/data-source";
import { Id } from "../../config/declarations";
import { WireTransfer } from "../entities/wire-transfer.entity";

export const create = async (data: WireTransfer): Promise<WireTransfer>  => {
    const repository = AppDataSource.getRepository(WireTransfer);

    const wireTransfer = repository.create(data);

    await repository.save(wireTransfer);

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