import express from 'express';
import cors from 'cors';
import "reflect-metadata";
import listEndpoints from 'express-list-endpoints';

import bankRoutes from '../app/bank/bank.route';
import bankAccountRoutes from '../app/bankAccount/bankAccount.route';
import customerRoutes from '../app/customer/customer.route';
import transferRoutes from '../app/wire-transfer/wire-transfer.route';

import Logger from '../app/utils/logger';

import { AppDataSource } from './data-source';


class App {
    private readonly app: express.Application;
    private readonly port: string;

    private apiPaths = {
        balance: '/api/balance',
        bank: '/api/banks',
        bankAcounts: '/api/bank-accounts',
        customers: '/api/customers',
        transfers: '/api/transfers'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';
        AppDataSource.initialize().then((con)=> {
            Logger.info(`conecction successfuly`)
            this.middlewares();
            this.routes();
            con.synchronize()
        }).catch(error => {
            Logger.error(`connection error ${JSON.stringify(error)}`);
        });
    }

    listen() {
        this.app.listen(this.port, () => {
            Logger.info(`Server running at port ${this.port}`)
        });
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json())
    }

    routes() {
        this.app.use(this.apiPaths.bank, bankRoutes)
        this.app.use(this.apiPaths.bankAcounts, bankAccountRoutes);
        this.app.use(this.apiPaths.customers, customerRoutes);
        this.app.use(this.apiPaths.transfers, transferRoutes);
        Logger.info(listEndpoints(this.app as any));
    }
}
export default App; 