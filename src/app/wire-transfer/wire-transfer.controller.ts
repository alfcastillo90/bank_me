import { Request, Response } from 'express';

export const getTransfers = async (req: Request, res: Response) => {
    try {
        return res.json({
            result: 'success',
            message: 'getTransfers'
        });
    } catch(e: any) {
        return res.status(400).send(e)
    }
}

export const getTransfersByBankAccount = async (req: Request, res: Response) => {
    try {
        return res.json({
            result: 'success',
            message: 'getTransfersByBankAccount'
        });
    } catch(e: any) {
        return res.status(400).send(e)
    }
}

export const getTransfersByCustomer = async (req: Request, res: Response) => {
    try {
        return res.json({
            result: 'success',
            message: 'getTransfersByCustomer'
        });
    } catch(e: any) {
        return res.status(400).send(e)
    }
}

export const getTransfersById = async (req: Request, res: Response) => {
    try {
        return res.json({
            result: 'success',
            message: 'getTransfersById'
        });
    } catch(e: any) {
        return res.status(400).send(e)
    }
}

export const createExternalTransfer = async (req: Request, res: Response) => {
    try {
        return res.json({
            result: 'success',
            message: 'createExternalTransfer'
        });
    } catch(e: any) {
        return res.status(400).send(e)
    }
}

export const createInternalTransfer = async (req: Request, res: Response) => {
    try {
        return res.json({
            result: 'success',
            message: 'createExternalTransfer'
        });
    } catch(e: any) {
        return res.status(400).send(e)
    }
}