import { Request, Response } from 'express';
import { create, getById, list, update } from './customer.repository';
import { validationResult } from 'express-validator';

export const getCustomers = async (req: Request, res: Response) => {
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

export const getCustomersById = async (req: Request, res: Response) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({
                status: 400,
                errors
            })
        }

        const { customerId } = req.params;
        const customer = await getById(customerId);

        res.status(200).json(customer);
    } catch (error) {
        res.status(422).json({
            status: 400,
            error
        })
    }
}

export const createCustomer = async (req: Request, res: Response) => {
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

export const updateCustomer = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const id = req.params.customerId;

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({
                status: 422,
                ...errors
            });
        }

        const customer = await update(id, body);

        res.status(200).json(customer);
    }  catch(e: any) {
        return res.status(400).send(e)
    }
}


export const disableCustomer = async (req: Request, res: Response) => {
    try {
        const id = req.params.customerId;

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