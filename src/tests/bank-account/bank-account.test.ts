import { Response } from "express";
import { getBankAccounts, getBankAccountsByCustomer, getBankAccountsById } from "../../app/bank-account/bank-account.controller";
import * as bankAccountRepository from "../../app/bank-account/bank-account.repository";
import { BankAccount } from "../../app/entities/bank-account.entity";
import { Fakexpress } from "../../app/utils/fake-express";

describe('BankAccountController', () => {
    test('getBankAccounts - success', async () => {
        const bankAccounts = [
            {
                "id": 1,
                "bankId": 1,
                "customerId": 1,
                "type": "CHECKING",
                "accountNumber": 123456789,
                "currentAccountBalance": 10000000,
                "isActive": true,
                "createAt": "2022-06-14 11:21:31",
                "updateAt": "2022-06-14 11:21:31"
            },
            {
                "id": 2,
                "bankId": 1,
                "customerId": 1,
                "type": "SAVINGS",
                "accountNumber": 222222222,
                "currentAccountBalance": 10000000,
                "isActive": true,
                "createAt": "2022-06-14 11:28:27",
                "updateAt": "2022-06-14 11:28:27"
            },
        ];

        const reqRes = new Fakexpress({});


        const spy = jest.spyOn(bankAccountRepository, 'list').mockResolvedValueOnce(bankAccounts as BankAccount[]);
        await getBankAccounts(reqRes.req, reqRes.res as Response);
        expect(reqRes.responseData).toEqual(bankAccounts);
        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
    });

    test('getBankAccountsById - success', async () => {
        const bankAccount =  {
            id: 1,
            bankId: 1,
            customerId: 1,
            type: "CHECKING",
            accountNumber: 123456789,
            currentAccountBalance: 10000000,
            isActive: true,
            createAt: "2022-06-14 11:21:31",
            updateAt: "2022-06-14 11:21:31"
        };

        const reqRes = new Fakexpress({
            params: {
                bankId: 1
            }
        });


        const spy = jest.spyOn(bankAccountRepository, 'getById').mockResolvedValueOnce(bankAccount as BankAccount);
        await getBankAccountsById(reqRes.req, reqRes.res as any);
        expect(reqRes.responseData).toEqual(bankAccount);
        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
    });

    test('getBankAccountsByCustomer - success', async () => {
        const bankAccounts =  [
            {
                id: 1,
                bankId: 1,
                customerId: 1,
                type: "CHECKING",
                accountNumber: 123456789,
                currentAccountBalance: 10000000,
                isActive: true,
                createAt: "2022-06-14 11:21:31",
                updateAt: "2022-06-14 11:21:31"
            }
        ];

        const reqRes = new Fakexpress({
            params: {
                customerId: 1
            }
        });


        const spy = jest.spyOn(bankAccountRepository, 'getByCustomerId').mockResolvedValueOnce(bankAccounts as BankAccount[]);
        await getBankAccountsByCustomer(reqRes.req, reqRes.res as any);
        expect(reqRes.responseData).toEqual(bankAccounts);
        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
    });
})