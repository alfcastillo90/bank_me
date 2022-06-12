import express from 'express';
import cors from 'cors';
import "reflect-metadata";

import balanceRoutes from '../app/balance/balance.route';
import bankAccountRoutes from '../app/bankAccount/bankAccount.route';
import customerRoutes from '../app/customer/customer.route';
import transferRoutes from '../app/transfer/transfer.route';
import { AppDataSource } from './data-source';


class App {
    private readonly app: express.Application;
    private readonly port: string;

    private apiPaths = {
        balance: '/api/balance',
        bankAcounts: '/api/bank-account',
        customers: '/api/customer',
        transfers: '/api/transfer'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.initializeModels();
        this.middlewares();
        this.routes();
    }

    private async initializeModels() {
        try {
            const connection = await AppDataSource.initialize();
            if (connection === undefined) {
                console.log('Error connecting to database')
                throw new Error('Error connecting to database');
            } // In case the connection failed, the app stops.
            await connection.synchronize(); // this updates the database schema to match the models' definitions
            console.log(`conecction successfuly`)
        } catch (error) {
            console.log(`error ${error}`)
        }
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
        this.app.use(this.apiPaths.bankAcounts, bankAccountRoutes);
        this.app.use(this.apiPaths.customers, customerRoutes);
        this.app.use(this.apiPaths.transfers, transferRoutes);
    }
}
export default App;