import { Request, Response } from 'express';

export const getBankAccounts = async (req: Request, res: Response) => {
    try {
        return res.json({
            result: 'success',
            message: 'getBankAccounts'
        });
    } catch(e: any) {
        return res.status(400).send(e)
    }
}

export const getBankAccountsById = async (req: Request, res: Response) => {
    try {
        return res.json({
            result: 'success',
            message: 'getBankAccountsById'
        });
    } catch(e: any) {
        return res.status(400).send(e)
    }
}

export const getBankAccountsByCustomer = async (req: Request, res: Response) => {
    try {
        return res.json({
            result: 'success',
            message: 'getBankAccountsByCustomer'
        });
    } catch(e: any) {
        return res.status(400).send(e)
    }
}

export const createBankAccount = async (req: Request, res: Response) => {
    try {
        return res.json({
            result: 'success',
            message: 'createBankAccount'
        });
    } catch(e: any) {
        return res.status(400).send(e)
    }
}