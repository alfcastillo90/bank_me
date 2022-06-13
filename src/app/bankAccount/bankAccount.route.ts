import { Router } from "express";
import { createBankAccount, getBankAccounts, getBankAccountsByCustomer, getBankAccountsById, disableBankAccount } from "./bankAccount.controller";
import { param } from 'express-validator';
import { createBankAccountValidator } from "./bankAccount.validators";

const router = Router();

router.get('/', getBankAccounts);
router.get('/id/:bankAccountId', param('bankAccountId').isNumeric(), getBankAccountsById);
router.get('/customer/:customerId', param('customerId').isNumeric(), getBankAccountsByCustomer);
router.post('/', createBankAccountValidator, createBankAccount);
router.patch('/disable/:bankAccountId', param('customerId').isNumeric(), disableBankAccount);

export default router;