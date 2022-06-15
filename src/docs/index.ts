import environment from "../config/environment";
import { bankAccounts } from "./bank-account";
import { banks } from "./banks";
import { customers } from "./customer";
import { schemas as importedSchemas } from "./schema";
import { wireTransfers } from "./wire-transfers";

export const swaggerDocs = {
    openapi: "3.0.1",
    info: {
        version: "1.0.0",
        title: "Bank ME",
        description: "Internal API for a fake financial institutioin using Node.JS",
        contact: {
            name: "Carlos Alfredo Castillo Rodríguez",
            email: "cacr1990@gmail.com",
            url: "https://github.com/alfcastillo90/"
        }
    },
    servers: [{
        url: `http://localhost:${environment.port}`,
        description: 'Local server'
    }],
    components: {
       schemas: importedSchemas
    },
    tags: {
        name: 'Basic bank operations'
    },
    paths: {
        ...banks,
        ...bankAccounts,
        ...customers,
        ...wireTransfers
    }

}