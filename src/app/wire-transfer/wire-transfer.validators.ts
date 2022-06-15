import { checkSchema } from 'express-validator';
import { WireTransferType } from '../../config/enums';

export const createWireTransferValidator = checkSchema({
    bankId: {
        in: ['body'],
        isNumeric: true
    },
    customerId: {
        in: ['body'],
        isNumeric: true,
    },
    type: {
        in: ['body'],
        isString: true,
        custom: {
            options: (value) => {
                const accountType = value.toUpperCase();

                if (accountType === WireTransferType.DEPOSIT || accountType === WireTransferType.TRANSFER || accountType === WireTransferType.WITHDRAWAL) {
                    return true;
                } else {
                    return false;
                }
            }
        }
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
})