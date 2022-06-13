import { checkSchema } from 'express-validator';

export const createWireTransferValidator = checkSchema({
    bankId: {
        in: ['body'],
        isNumeric: true
    },
    customerId: {
        in: ['body'],
        isNumeric: true,
    },
    bankAccountId: {
        in: ['body'],
        isNumeric: true,
    },
    type: {
        in: ['body'],
        isString: true,
    },
    amount: {
        in: ['body'],
        isNumeric: true,
    },
    sourceAccount: {
        in: ['body'],
        isNumeric: true,
    },
    destinationAccount: {
        in: ['body'],
        isNumeric: true,
    },
    message: {
        in: ['body'],
        isString: true
    },
    date: {
        in: ['body'],
        isDate: true
    }
})