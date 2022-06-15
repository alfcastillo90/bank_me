import { Request, Response } from 'express';
import { create, getByBankId, getByCustomerId, getById, list } from './wire-transfer.repository';
import { validationResult } from 'express-validator';
import { getByAccountNumber } from '../bank-account/bank-account.repository';

export const getWireTransfers = async (req: Request, res: Response) => {
    try {
        const wireTransfers = await list();

        res.status(200).json(wireTransfers);
    } catch (error) {
        res.status(400).json({
            status: 400,
            error
        })
    }
}

export const getWireTransfersByBank = async (req: Request, res: Response) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({
                status: 400,
                errors
            })
        }

        const { bankId } = req.params;
        const wireTransfers = await getByBankId(bankId);

        res.status(200).json(wireTransfers);
    } catch (error) {
        res.status(422).json({
            status: 400,
            error
        })
    }
}

export const getWireTransfersByCustomer = async (req: Request, res: Response) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({
                status: 400,
                errors
            })
        }

        const { customerId } = req.params;
        const wireTransfers = await getByCustomerId(customerId);

        res.status(200).json(wireTransfers);
    } catch (error) {
        res.status(500).json({
            status: 500,
            error
        })
    }
}

export const getWireTransfersById = async (req: Request, res: Response) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({
                status: 422,
                errors
            })
        }

        const { wireTransferId } = req.params;
        const wireTransfer = await getById(wireTransferId);

        res.status(200).json(wireTransfer);
    } catch (error) {
        res.status(500).json({
            status: 500,
            error
        })
    }
}

export const createWireTransfer = async (req: Request, res: Response) => {
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

export const getWireTransfersByBankAccount = async (req: Request, res: Response) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({
                status: 400,
                errors
            })
        }

        const { bankAccountNumber } = req.params;
        const wireTransfers = await getByAccountNumber(parseInt(bankAccountNumber));

        res.status(200).json(wireTransfers);
    } catch (error) {
        res.status(500).json({
            status: 500,
            error
        })
    }
}