import { Response } from "express";
import { getBankById, getBanks } from "../../app/bank/bank.controller";
import * as bankRepository from "../../app/bank/bank.repository";
import { Bank } from "../../app/entities/bank.entity";
import { Fakexpress } from "../../app/utils/fake-express";

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
})