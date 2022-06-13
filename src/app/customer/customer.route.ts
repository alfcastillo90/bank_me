import { Router } from "express";
import { createCustomer, disableCustomer, getCustomers, getCustomersById, updateCustomer } from "./customer.controller";
import { param } from 'express-validator';
import { createCustomerValidator, updateCustomerValidator } from "./customer.validators";

const router = Router();

router.get('/', getCustomers);
router.get('/id/:customerId', param('customerId').isNumeric(), getCustomersById);
router.post('/', createCustomerValidator, createCustomer);
router.put('/:customerId', updateCustomerValidator, updateCustomer);
router.patch('/disableCustomer/:customerId', param('customerId').isNumeric(), disableCustomer);


export default router;