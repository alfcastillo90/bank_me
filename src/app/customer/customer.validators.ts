import { checkSchema } from 'express-validator';

export const createCustomerValidator = checkSchema({
    name: {
        in: ['body'],
        isString: true
    },
    lastname: {
        in: ['body'],
        isString: true
    },
    email: {
        in: ['body'],
        isString: true
    },
    phone: {
        in: ['body'],
        isString: true
    },
    address: {
        in: ['body'],
        isString: true
    },
    company: {
        in: ['body'],
        isString: true
    },
    job: {
        in: ['body'],
        isString: true
    }
});

export const updateCustomerValidator = checkSchema({
    id: {
        in: ['params'],
        isNumeric: true
    },
    name: {
        in: ['body'],
        isString: true
    },
    lastname: {
        in: ['body'],
        isString: true
    },
    email: {
        in: ['body'],
        isString: true
    },
    phone: {
        in: ['body'],
        isString: true
    },
    address: {
        in: ['body'],
        isString: true
    },
    company: {
        in: ['body'],
        isString: true
    },
    job: {
        in: ['body'],
        isString: true
    }
});