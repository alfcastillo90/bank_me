import { Router } from "express";
import { getCustomers, getCustomersById } from "./customer.controller";


const router = Router();

router.get('/' , getCustomers);
router.get('/id/:id' , getCustomersById);

export default router;