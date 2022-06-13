import { Router } from "express";
import { createExternalTransfer, createInternalTransfer, getTransfers, getTransfersByBankAccount, getTransfersByCustomer, getTransfersById } from "./wire-transfer.controller";

const router = Router();

router.get('/' , getTransfers);
router.get('/bankAccount/:bankAccountNumber' , getTransfersByBankAccount);
router.get('/customer/:customerId' , getTransfersByCustomer);
router.get('/id/:id' , getTransfersById);
router.post('/external-transfer', createExternalTransfer);
router.post('/internal-transfer', createInternalTransfer);

export default router;