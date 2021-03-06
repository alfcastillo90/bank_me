export const bankAccounts = {
    '/api/bank-accounts': {
        get:{
            tags: ['Bank account operations'],
            description: "Get bank accounts",
            operationId: 'getBankAccounts',
            parameters:[],
            responses:{
                '200':{
                    description:"bank accounts were obtained",
                    content:{
                        'application/json':{
                            schema:{
                                $ref:'#/components/schemas/BankAccount'
                            }
                        }
                    }
                }
            }
        },
        post:{
            tags:['Bank account operations'],
            description: "Create bank account",
            operationId: "create",
            parameters:[],
            requestBody: {
                content:{
                    'application/json': {
                        schema:{
                            $ref:'#/components/schemas/CreateBankAccount'
                        }
                    }
                }
            },
            responses:{
                '201':{
                    description:"bank account were created successfully",
                    content:{
                        'application/json':{
                            schema:{
                                $ref:'#/components/schemas/CreateBankAccount'
                            }
                        }
                    }
                },
                '422': { 
                    description: 'Unprocessable Entity',
                    content:{
                        'application/json':{
                            schema:{
                                $ref:"#/components/schemas/Error422"
                            }
                        }
                    }
                },
                '500':{
                    description: 'Server error'
                }
            }
        }
    },
    '/api/bank-accounts/id/{id}': {
        get:{
            tags: ['Bank account operations'],
            description: "Get bank account information provided by id",
            operationId: "getBankAccountsById",
            parameters:[
                {
                    name:"id",
                    in:"path",
                    schema:{
                        $ref:"#/components/schemas/BankAccountId"
                    },
                    required:true,
                }
            ],
            responses:{
                '200':{
                    description:"bank account information is obtained",
                    content:{
                        'application/json':{
                            schema:{
                                $ref:"#/components/schemas/BankAccount"
                            }
                        }
                    }
                },
                '404':{
                    description: "Bank account is not found",
                    content:{
                        'application/json':{
                            schema:{
                                $ref:'#/components/schemas/Error',
                                example:{
                                    message:"We can't find the bank account",
                                    internal_code:"Invalid id"
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    '/api/bank-accounts/account-number/{accountNumber}': {
        get:{
            tags: ['Bank account operations'],
            description: "Get bank account information provided by account number",
            operationId: "getBankAccountByAccountNumber",
            parameters:[
                {
                    name:"id",
                    in:"path",
                    schema:{
                        $ref:"#/components/schemas/AccountNumber"
                    },
                    required:true,
                }
            ],
            responses:{
                '200':{
                    description:"bank account is obtained",
                    content:{
                        'application/json':{
                            schema:{
                                $ref:"#/components/schemas/BankAccount"
                            }
                        }
                    }
                },
                '404':{
                    description: "Bank is not found",
                    content:{
                        'application/json':{
                            schema:{
                                $ref:'#/components/schemas/Error',
                                example:{
                                    message:"We can't find the bank account",
                                    internal_code:"Invalid id"
                                }
                            }
                        }
                    }
                }
            }
        }
    }, 
    '/api/bank-accounts/customer/{customerId}': {
        get:{
            tags: ['Bank account operations'],
            description: "Get customer bank accounts",
            operationId: "getBankAccountsByCustomer",
            parameters:[
                {
                    name:"id",
                    in:"path",
                    schema:{
                        $ref:"#/components/schemas/CustomerId"
                    },
                    required:true,
                }
            ],
            responses:{
                '200':{
                    description:"bank account is obtained",
                    content:{
                        'application/json':{
                            schema:{
                                $ref:"#/components/schemas/BankAccount"
                            }
                        }
                    }
                },
                '404':{
                    description: "Bank is not found",
                    content:{
                        'application/json':{
                            schema:{
                                $ref:'#/components/schemas/Error',
                                example:{
                                    message:"We can't find the bank account",
                                    internal_code:"Invalid id"
                                }
                            }
                        }
                    }
                }
            }
        }
    }, 
    '/api/bank-accounts/disable/{id}': {
        patch: {
            tags: ['Bank account operations'],
            description: "Disable bank accounts",
            operationId: "disableBankAccount",
            parameters:[
                {
                    name:"id",
                    in:"path",
                    schema:{
                        $ref:"#/components/schemas/BankAccountId"
                    },
                    required:true,
                }
            ],
            responses:{
                '200':{
                    description:"bank account were disabled",
                    content:{
                        'application/json':{
                            schema:{
                                $ref:'#/components/schemas/Message'
                            }
                        }
                    }
                },
                '422': { 
                    description: 'Unprocessable Entity',
                    content:{
                        'application/json':{
                            schema:{
                                $ref:"#/components/schemas/Error422"
                            }
                        }
                    }
                },
                '500':{
                    description: 'Server error'
                }
            }
        }
    }
}