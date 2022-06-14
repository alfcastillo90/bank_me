import { Response } from "express";
import { create, getBankById, getBanks } from "../../app/bank/bank.controller";
import * as bankRepository from "../../app/bank/bank.repository";
import { Bank } from "../../app/entities/bank.entity";
import { Fakexpress } from "../../app/utils/fake-express";
import { randCompanyName } from '@ngneat/falso';

const moment = require('moment');

describe('BankController', () => {
    test('getBanks - success', async () => {
        const banks = [
            {
                id: 1,
                name: "Citigroup",
                createAt: "2022-06-13 10:56:12",
                bankAccounts: [],
                wireTransfers: []
            },
            {
                id: 2,
                name: "Bank of America",
                createAt: "2022-06-13 10:56:12",
                bankAccounts: [],
                wireTransfers: []
            }
        ];

        const reqRes = new Fakexpress({});


        const spy = jest.spyOn(bankRepository, 'list').mockResolvedValueOnce(banks);
        await getBanks(reqRes.req, reqRes.res as Response);
        expect(reqRes.responseData).toEqual(banks);
        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
    });

    test('getBanksById - success', async () => {
        const bank: Bank = {
            id: 1,
            name: "Citigroup",
            createAt: "2022-06-13 10:56:12",
            bankAccounts: [],
            wireTransfers: []
        }

        const reqRes = new Fakexpress({
            params: {
                bankId: 1
            }
        });


        const spy = jest.spyOn(bankRepository, 'getById').mockResolvedValueOnce(bank);
        await getBankById(reqRes.req, reqRes.res as any);
        expect(reqRes.responseData).toEqual(bank);
        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
    });

    test('createBank - success', async()=> {
        const bank = {
            id: Math.floor(Math.random() * 10),
            name:  `${randCompanyName()} bank`,
            createAt: moment().format('YYYY-MM-DD hh:mm:ss'),
            bankAccounts: [],
            wireTransfers: []
        }

       
        const reqRes = new Fakexpress({
            body: {
                name: bank.name
            }
        });

        
        const spy = jest.spyOn(bankRepository, 'createBank').mockResolvedValueOnce(bank);
        await create(reqRes.req, reqRes.res as Response);
        expect(reqRes.responseData).toEqual(bank);
        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
    });
})