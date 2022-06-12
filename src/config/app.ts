import express from 'express';
import cors from 'cors';
import "reflect-metadata";
import listEndpoints from 'express-list-endpoints';

import balanceRoutes from '../app/balance/balance.route';
import bankRoutes from '../app/bank/bank.route';
import bankAccountRoutes from '../app/bankAccount/bankAccount.route';
import customerRoutes from '../app/customer/customer.route';
import transferRoutes from '../app/transfer/transfer.route';

import { AppDataSource } from './data-source';


class App {
    private readonly app: express.Application;
    private readonly port: string;

    private apiPaths = {
        balance: '/api/balance',
        bank: '/api/banks',
        bankAcounts: '/api/bank-account',
        customers: '/api/customer',
        transfers: '/api/transfer'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';
        AppDataSource.initialize().then((con)=> {
            console.log(`conecction successfuly`);
            this.middlewares();
            this.routes();
            con.synchronize()
        }).catch(error => {
            console.log(`connection error ${error}`)
        });
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running at port ${this.port}`);
        });
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json())
    }

    routes() {
        this.app.use(this.apiPaths.balance, balanceRoutes);
        this.app.use(this.apiPaths.bank, bankRoutes)
        this.app.use(this.apiPaths.bankAcounts, bankAccountRoutes);
        this.app.use(this.apiPaths.customers, customerRoutes);
        this.app.use(this.apiPaths.transfers, transferRoutes);
        console.log(listEndpoints(this.app as any));
    }
}
export default App;