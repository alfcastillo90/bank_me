import { AppDataSource } from "../../config/data-source";
import { Id } from "../../config/declarations";
import { Customer } from "../entities/customer.entity";

export const create = async (data: Customer): Promise<Customer>  => {
    const repository = AppDataSource.getRepository(Customer);

    const customer = repository.create(data);

    await repository.save(customer);

    return customer;
}

export const list = async(): Promise<Customer[]> => {
    const repository = AppDataSource.getRepository(Customer);

    return repository.find();
}

export const getById = async(id: Id): Promise<Customer> => {
    const repository = AppDataSource.getRepository(Customer);
    const customer = await repository.findOneBy({ id: id as number});

    if (!customer) {
        throw new Error("Customer does not exist");
    }

    return customer;
}

export const update = async (id: Id, data: Partial<Customer>): Promise<Customer>  => {
    const repository = AppDataSource.getRepository(Customer);

    const customer = await repository.findOneBy({ id: id as number});

    if (!customer) {
        throw new Error("Customer does not exist");
    } else {
        await repository.update({ id: id as number }, data);
        return customer;
    }
}