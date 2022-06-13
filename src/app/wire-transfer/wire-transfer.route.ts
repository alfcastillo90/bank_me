import { Router } from "express";
import { createWireTransfer, getWireTransfers, getWireTransfersByBankAccount, getWireTransfersByCustomer, getWireTransfersById } from "./wire-transfer.controller";
import { createWireTransferValidator } from "./wire-transfer.validators";
import { param } from 'express-validator';

const router = Router();

router.get('/' , getWireTransfers);
router.get('/bankAccount/:bankAccountNumber', param('bankAccountNumber').isNumeric(), getWireTransfersByBankAccount);
router.get('/customer/:customerId', param('customerId').isNumeric(), getWireTransfersByCustomer);
router.get('/id/:wireTransferid,', param('wireTransferid').isNumeric(), getWireTransfersById);
router.post('/', createWireTransferValidator, createWireTransfer);

export default router;