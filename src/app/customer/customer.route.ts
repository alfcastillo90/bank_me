import { Router } from "express";
import { createCustomer, disableCustomer, getCustomers, getCustomersById, updateCustomer } from "./customer.controller";
import { param } from 'express-validator';
import { createCustomerValidator, updateCustomerValidator } from "./customer.validator";

const router = Router();

router.get('/' , getCustomers);
router.get('/id/:customerId', param('bankId').isNumeric(), getCustomersById);
router.post('/', createCustomerValidator, createCustomer);
router.put('/:customerId', updateCustomerValidator, updateCustomer);
router.patch('/disableCustomer/:customerId', param('bankId').isNumeric(), disableCustomer);


export default router;