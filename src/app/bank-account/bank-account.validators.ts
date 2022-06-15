import { checkSchema } from 'express-validator';
import { BankAccountType } from '../../config/enums';

export const createBankAccountValidator = checkSchema({
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

                if (accountType === BankAccountType.SAVINGS || accountType === BankAccountType.CHECKING) {
                    return true;
                } else {
                    return false;
                }
            }
        }

    },
    initialDeposit: {
        in: ['body'],
        isNumeric: true
    }
})