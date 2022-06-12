import { Request, Response } from 'express';

export const getCustomers = async (req: Request, res: Response) => {
    try {
        return res.json({
            result: 'success',
            message: 'getCustomers'
        });
    } catch(e: any) {
        return res.status(400).send(e)
    }
}

export const getCustomersById = async (req: Request, res: Response) => {
    try {
        return res.json({
            result: 'success',
            message: 'getCustomersById'
        });
    } catch(e: any) {
        return res.status(400).send(e)
    }
}