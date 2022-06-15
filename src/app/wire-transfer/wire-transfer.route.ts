import { Router } from "express";
import { createWireTransfer, getWireTransfers, getWireTransfersByBank, getWireTransfersByBankAccount, getWireTransfersByCustomer, getWireTransfersById } from "./wire-transfer.controller";
import { createWireTransferValidator } from "./wire-transfer.validators";
import { param } from 'express-validator';

const router = Router();

router.get('/' , getWireTransfers);
router.get('/bank/:bankId', param('bankId').isNumeric(), getWireTransfersByBank);
router.get('/bank/:bankAccountNumber', param('bankAccountNumber').isNumeric(), getWireTransfersByBankAccount);
router.get('/customer/:customerId', param('customerId').isNumeric(), getWireTransfersByCustomer);
router.get('/id/:wireTransferid,', param('wireTransferid').isNumeric(), getWireTransfersById);
router.post('/', createWireTransferValidator, createWireTransfer);

export default router;