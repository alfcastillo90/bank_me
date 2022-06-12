import { Router } from "express";
import { getBalanceByCustomer } from "./balance.controller";


const router = Router();

router.get('/' , getBalanceByCustomer);

export default router;