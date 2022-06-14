import { Response } from "express";
import { WireTransfer } from "../../app/entities/wire-transfer.entity";
import { Fakexpress } from "../../app/utils/fake-express";
import { getWireTransfers, getWireTransfersByCustomer, getWireTransfersById } from "../../app/wire-transfer/wire-transfer.controller";
import * as wireTransferRepository from '../../app/wire-transfer/wire-transfer.repository';

describe('WireTransferController', () => {
    test('getWireTransfers - success', async () => {
        const wireTransfers = [
            {
                id: 1,
                bankId: 2,
                bankAccountId: 1,
                customerId: 1,
                amount: 100000,
                sourceAccount: 123456789,
                destinationAccount: 999999999,
                message: "test",
                type: "Deposit",
                createAt: "2022-06-14 03:23:18",
                updateAt: "2022-06-14 03:23:18"
            }
        ]

        const reqRes = new Fakexpress({});


        const spy = jest.spyOn(wireTransferRepository, 'list').mockResolvedValueOnce(wireTransfers as WireTransfer[]);
        await getWireTransfers(reqRes.req, reqRes.res as Response);
        expect(reqRes.responseData).toEqual(wireTransfers);
        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
    });

    test('getWireTransfersById - success', async () => {
        const bankAccount =      {
            id: 1,
            bankId: 2,
            bankAccountId: 1,
            customerId: 1,
            amount: 100000,
            sourceAccount: 123456789,
            destinationAccount: 999999999,
            message: "test",
            type: "Deposit",
            createAt: "2022-06-14 03:23:18",
            updateAt: "2022-06-14 03:23:18"
        };

        const reqRes = new Fakexpress({
            params: {
                bankId: 1
            }
        });


        const spy = jest.spyOn(wireTransferRepository, 'getById').mockResolvedValueOnce(bankAccount as WireTransfer);
        await getWireTransfersById(reqRes.req, reqRes.res as any);
        expect(reqRes.responseData).toEqual(bankAccount);
        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
    });

    test('getWireTransfersByCustomer - success', async () => {
        const wireTransfers =  [
            {
                id: 1,
                bankId: 2,
                bankAccountId: 1,
                customerId: 1,
                amount: 100000,
                sourceAccount: 123456789,
                destinationAccount: 999999999,
                message: "test",
                type: "Deposit",
                createAt: "2022-06-14 03:23:18",
                updateAt: "2022-06-14 03:23:18"
            }
        ];

        const reqRes = new Fakexpress({
            params: {
                customerId: 1
            }
        });


        const spy = jest.spyOn(wireTransferRepository, 'getByCustomerId').mockResolvedValueOnce(wireTransfers as WireTransfer[]);
        await getWireTransfersByCustomer(reqRes.req, reqRes.res as any);
        expect(reqRes.responseData).toEqual(wireTransfers);
        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
    });
})