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
    components: {
        schemas: {
            bank: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string',
                        example: 'Bank of Chile'
                    }
                }
            },
            bankAccount: {
                type: 'object',
                properties: {
                    bankId: {
                        type: 'number',
                    },
                    customerId: {
                        type: 'number'
                    },
                    initialDeposit: {
                        type: 'number'
                    },
                    type: {
                        type: 'string',
                        description: 'CHECKING or SAVINGS'
                    }
                }
            },
            bankAccountNumber: {
                type: 'number'
            },
            bankId: {
                type: 'number'
            },
            customer: {
                type:'object',
                properties: {
                    name: {
                        type: 'string'
                    },
                    lastname: {
                        type: 'string'
                    },
                    email: {
                        type: 'string'
                    },
                    phone: {
                        type: 'string'
                    },
                    address: {
                        type: 'string'
                    },
                    company: {
                        type: 'string'
                    },
                    job: {
                        type: 'string'
                    }
                }
            },
            customerId: {
                type: 'number'
            },
            wireTransfer: {
                type: 'object',
                properties: {
                    bankId: {
                        type: 'number',
                    },
                    customerId: {
                        type: 'number'
                    },
                    initialDeposit: {
                        type: 'number'
                    },
                    type: {
                        type: 'string',
                        description: 'DEPOSIT, TRANSFER, WITHDRAWAL'
                    },
                    amount: {
                        type: 'number'
                    },
                    sourceAccount: {
                        type: 'number'
                    },
                    destinationAccount: {
                        type: 'number'
                    },
                    message: {
                        type: 'string'
                    }
                }
            },
            wireTransferId: {
                type: 'number'
            }
        }
    }
}