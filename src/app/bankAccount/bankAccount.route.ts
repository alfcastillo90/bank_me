import { Router } from "express";
import { createBankAccount, getBankAccounts, getBankAccountsByCustomer, getBankAccountsById } from "./bankAccount.controller";

const router = Router();

router.get('/' , getBankAccounts);
router.get('/id/:id' , getBankAccountsById);
router.get('/customer/:customerId' , getBankAccountsByCustomer);
router.post('/', createBankAccount);

export default router;