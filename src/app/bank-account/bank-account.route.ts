import { Router } from "express";
import { createBankAccount, getBankAccounts, getBankAccountsByCustomer, getBankAccountsById, disableBankAccount, getBankAccountByAccountNumber } from "./bank-account.controller";
import { param } from 'express-validator';
import { createBankAccountValidator } from "./bank-account.validators";

const router = Router();

router.get('/', getBankAccounts);
router.get('/account-number/:accountNumber', param('accountNumber').isNumeric(), getBankAccountByAccountNumber)
router.get('/id/:bankAccountId', param('bankAccountId').isNumeric(), getBankAccountsById);
router.get('/customer/:customerId', param('customerId').isNumeric(), getBankAccountsByCustomer);
router.post('/', createBankAccountValidator, createBankAccount);
router.patch('/disable/:bankAccountId', param('bankAccountId').isNumeric(), disableBankAccount);

export default router;