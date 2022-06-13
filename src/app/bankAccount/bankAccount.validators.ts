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
                if (value.toUpperCase() !== BankAccountType.SAVINGS && value.toUpperCase() !== BankAccountType.CHECKING) {
                    Promise.reject(`Invalid account type. It must be equal to ${BankAccountType.CHECKING} or ${BankAccountType.SAVINGS}`)
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