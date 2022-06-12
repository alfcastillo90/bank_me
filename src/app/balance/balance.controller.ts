import { Request, Response } from "express";

export const getBalanceByCustomer = async (req: Request, res: Response) => {
    try {
        return res.json({
            result: 'success',
            message: 'getBalanceByCustomer'
        });
    } catch(e: any) {
        return res.status(400).send(e)
    }
}