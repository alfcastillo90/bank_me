import { Request, Response, NextFunction } from "express"
import { createBank, getById, list } from "./bank.repository";
import { validationResult } from 'express-validator'
import { NotFound, BadRequest } from "http-errors";
import { Bank } from "../entities/bank.entity";

export const getBanks = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const banks = await list();
        res.status(200).json(banks);
    } catch (error) {
        next(error);
    }
}

export const getBankById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return next(res.status(422).json(JSON.stringify(errors)))
        }


        const { bankId } = req.params;

        const bank = await getById(bankId);

        res.status(200).json(bank);
    } catch (error) {
        next(error);
    }
}

export const create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const body = req.body;

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return next(res.status(422).json({
                status: 422,
                ...errors
            }));
            // return next(new BadRequest(JSON.stringify(errors)))
        }

        const bank = await createBank(body);

        res.status(200).json(bank);
    } catch (error) {
        next(error);
    }
}