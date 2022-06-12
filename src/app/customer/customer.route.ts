import { Router } from "express";
import { createCustomer, getCustomers, getCustomersById } from "./customer.controller";


const router = Router();

router.get('/' , getCustomers);
router.get('/id/:id' , getCustomersById);
router.post('/', createCustomer)

export default router;