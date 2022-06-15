import { Router } from "express";
import { createCustomer, disableCustomer, getCustomers, getCustomerById, updateCustomer } from "./customer.controller";
import { param } from 'express-validator';
import { createCustomerValidator, updateCustomerValidator } from "./customer.validators";

const router = Router();

router.get('/', getCustomers);
router.get('/id/:customerId', param('customerId').isNumeric(), getCustomerById);
router.post('/', createCustomerValidator, createCustomer);
router.put('/id/:customerId', updateCustomerValidator, updateCustomer);
router.patch('/disable-customer/:customerId', param('customerId').isNumeric(), disableCustomer);


export default router;