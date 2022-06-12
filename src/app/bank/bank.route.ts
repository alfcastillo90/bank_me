import { Router } from "express";
import { create, getBankById, getBanks } from "./bank.controller";
import { body, validationResult, param } from 'express-validator';

const router = Router();

router.post("/", body('name').isString() ,create);

router.get("/", getBanks);

router.get("/:bankId", param('bankId').isNumeric() ,getBankById);


export default router;