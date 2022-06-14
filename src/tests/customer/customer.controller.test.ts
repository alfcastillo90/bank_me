import { Response } from "express";
import { getCustomerById, getCustomers } from "../../app/customer/customer.controller";
import * as customerRepository from "../../app/customer/customer.repository";
import { Customer } from "../../app/entities/customer.entity";
import { Fakexpress } from "../../app/utils/fake-express";

describe('CustomerController', () => {
    test('getCustomers - success', async () => {
        const customers = [
            {
                id: 1,
                name: "John",
                lastname: "Doe",
                email: "fake@mail.com",
                phone: "+1234567890",
                address: "fake street 1234",
                company: "big bank",
                job: "developer",
                isActive: true,
                createAt: "2022-06-14 12:43:45",
                updateAt: "2022-06-14 12:43:45",
            }
        ];

        const reqRes = new Fakexpress({});


        const spy = jest.spyOn(customerRepository, 'list').mockResolvedValueOnce(customers as Customer[]);
        await getCustomers(reqRes.req, reqRes.res as Response);
        expect(reqRes.responseData).toEqual(customers);
        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
    });

    test('getCustomerById - success', async () => {
        const customer = {
            id: 1,
            name: "John",
            lastname: "Doe",
            email: "fake@mail.com",
            phone: "+1234567890",
            address: "fake street 1234",
            company: "big bank",
            job: "developer",
            isActive: true,
            createAt: "2022-06-14 12:43:45",
            updateAt: "2022-06-14 12:43:45",
        };

        const reqRes = new Fakexpress({
            params: {
                customerId: 1
            }
        });


        const spy = jest.spyOn(customerRepository, 'getById').mockResolvedValueOnce(customer as Customer);
        await getCustomerById(reqRes.req, reqRes.res as any);
        expect(reqRes.responseData).toEqual(customer);
        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
    });
})
