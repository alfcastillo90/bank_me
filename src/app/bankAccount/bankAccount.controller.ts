import { Request, Response } from 'express';
import { create, getById, list, update, getByCustomerId } from './bankAccount.repository';
import { validationResult } from 'express-validator';

export const getBankAccounts = async (req: Request, res: Response) => {
    try {
        const customers = await list();

        res.status(200).json(customers);
    } catch (error) {
        res.status(400).json({
            status: 400,
            error
        })
    }
}

export const getBankAccountsById = async (req: Request, res: Response) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({
                status: 400,
                errors
            })
        }

        const { bankAccountId } = req.params;
        const customer = await getById(bankAccountId);

        res.status(200).json(customer);
    } catch (error) {
        res.status(422).json({
            status: 400,
            error
        })
    }
}

export const getBankAccountsByCustomer = async (req: Request, res: Response) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({
                status: 400,
                errors
            })
        }

        const { customerId } = req.params;
        const customer = await getByCustomerId(customerId);

        res.status(200).json(customer);
    } catch (error) {
        res.status(422).json({
            status: 400,
            error
        })
    }
}

export const createBankAccount = async (req: Request, res: Response) => {
    try {
        const body = req.body;

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({
                status: 422,
                ...errors
            });
        }

        const bank = await create(body);

        res.status(200).json(bank);
    }  catch(e: any) {
        return res.status(400).send(e)
    }
}


export const disableBankAccount = async (req: Request, res: Response) => {
    try {
        const id = req.params.bankAccountId;

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({
                status: 422,
                ...errors
            });
        }

        const customer = await update(id, { isActive: false });

        res.status(200).json(customer);
    }  catch(e: any) {
        return res.status(400).send(e)
    }
}