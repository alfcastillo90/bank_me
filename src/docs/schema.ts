export const schemas = {
    Bank: {
        type: 'object',
        properties: {
            id: {
                type: 'number',
                example: 1
            },
            name: {
                type: 'string',
                example: 'Bank of Chile'
            }
        }
    },
    BankAccounut: {
        type: 'object',
        properties: {
            id: {
                type: 'number'
            },
            bankId: {
                type: 'number',
            },
            customerId: {
                type: 'number'
            },
            type: {
                type: 'string',
                description: 'CHECKING or SAVINGS'
            },
            accountNumber: {
                type: 'number'
            },
            currentAccountBalance: {
                type: 'number'
            },
            isActive: {
                type: 'boolean'
            },
            createAt: {
                type: 'date'
            },
            updateAt: {
                type: 'date'
            }
        }
    },
    CreateBankAccount: {
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
    AccountNumber: {
        type: 'number'
    },
    BankId: {
        type: 'number'
    },
    BankAccountId: {
        type: 'number'
    },
    CreateBank: {
        type: 'object',
        properties: {
            name: {
                type: 'string',
                example: 'Bank of Chile'
            }
        }
    },
    Customer: {
        type: 'object',
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
    CustomerId: {
        type: 'number'
    },
    WireTransfer: {
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
    WireTransferId: {
        type: 'number'
    },
    Error: {
        type: 'object',
        properties: {
            message: {
                type: 'string'
            },
            internal_code: {
                type: 'string'
            }
        }
    },
    Error422: {
        type: 'object',
        properties: {
            status: {
                type: 'number',
                example: 422
            },
            errors: {
                type: 'object',
                properties: {
                    msg: {
                        type: 'string'
                    },
                    param: {
                        type: 'string'
                    },
                    location: {
                        type: 'string'
                    }
                }
            }
        }
    },
    Message: {
        type: 'object',
        properties: {
            message: {
                type: 'string'
            }
        }
    }
}