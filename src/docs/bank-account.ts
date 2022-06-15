export const bankAccoutns = {
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
            description: "Get a bank",
            operationId: "getBankById",
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
    
}