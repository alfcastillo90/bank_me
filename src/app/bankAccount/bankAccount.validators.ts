import { checkSchema } from 'express-validator';

enum BankAccountType {
    SAVINGS = 'SAVINGS',
    CHECKING = 'CHECKING'
}
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
    accountNumber: {
        in: ['body'],
        isNumeric: true
    },
    currentAccountBalance: {
        in: ['body'],
        isNumeric: true
    }
})