import { Router } from "express";
import { getTransfers, getTransfersByBankAccount, getTransfersByCustomer, getTransfersById } from "./transfer.controller";

const router = Router();

router.get('/' , getTransfers);
router.get('/bankAccount/:bankAccountNumber' , getTransfersByBankAccount);
router.get('/customer/:customerId' , getTransfersByCustomer);
router.get('/id/:id' , getTransfersById);

export default router;