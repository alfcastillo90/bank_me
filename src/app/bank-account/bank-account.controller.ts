import { Request, Response } from 'express';
import { create, getById, list, update, getByCustomerId } from './bank-account.repository';
import { validationResult } from 'express-validator';

export const getBankAccounts = async (req: Request, res: Response) => {
    try {
        const banks = await list();

        res.status(200).json(banks);
    } catch (error) {
        res.status(500).json({
            status: 500,
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
        const bankAccounts = await getById(parseInt(bankAccountId));

        res.status(200).json(bankAccounts);
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
        const bankAccounts = await getByCustomerId(parseInt(customerId));

        res.status(200).json(bankAccounts);
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
        const id = parseInt(req.params.bankAccountId);

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({
                status: 422,
                ...errors
            });
        }

        const bankAccount = await update(id, { isActive: false });

        res.status(200).json(bankAccount);
    }  catch(e: any) {
        return res.status(400).send(e)
    }
}