import { Request, Response, NextFunction } from "express"
import { createBank, getById, list } from "./bank.repository";
import { validationResult } from 'express-validator';

export const getBanks = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const banks = await list();
        res.status(200).json(banks);
    } catch (error) {
        next(error);
    }
}

export const getBankById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({
                status: 422,
                ...errors
            });
        }


        const { bankId } = req.params;

        const bank = await getById(bankId);

        res.status(200).json(bank);
    } catch (error) {
        next(error);
    }
}

export const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const body = req.body;

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({
                status: 422,
                ...errors
            });
        }

        const bank = await createBank(body);

        res.status(200).json(bank);
    } catch (error) {
        next(error);
    }
}