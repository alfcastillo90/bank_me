import { Router } from "express";
import { getBankAccounts, getBankAccountsByCustomer, getBankAccountsById } from "./bankAccount.controller";


const router = Router();

router.get('/' , getBankAccounts);
router.get('/id/:id' , getBankAccountsById);
router.get('/customer/:customerId' , getBankAccountsByCustomer);

export default router;