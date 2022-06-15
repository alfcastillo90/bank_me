import { Request, Response } from "express"
import { createBank, getById, list } from "./bank.repository";
import { validationResult } from 'express-validator';

export const getBanks = async (req: Request, res: Response) => {
    try {
        const banks = await list();
        res.status(200).json(banks);
    } catch (error) {
        res.status(400).json(error);
    }
}

export const getBankById = async (req: Request, res: Response) => {
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
        res.status(400).json(error);
    }
}

export const create = async (req: Request, res: Response) => {
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
        return res.status(422).json(error);
    }
}