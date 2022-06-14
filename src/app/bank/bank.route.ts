import { Router } from "express";
import { create, getBankById, getBanks } from "./bank.controller";
import { body, param } from 'express-validator';

const router = Router();

router.post("/", body('name').isString() ,create);

router.get("/", getBanks);

router.get("/id/:bankId", param('bankId').isNumeric() ,getBankById);


export default router;