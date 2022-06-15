export const banks = {
    '/api/banks': {
        get:{
            tags: ['Bank operations'],
            description: "Get banks",
            operationId: 'getBanks',
            parameters:[],
            responses:{
                '200':{
                    description:"banks were obtained",
                    content:{
                        'application/json':{
                            schema:{
                                $ref:'#/components/schemas/Bank'
                            }
                        }
                    }
                }
            }
        },
        post:{
            tags:['Bank operations'],
            description: "Create bank",
            operationId: "create",
            parameters:[],
            requestBody: {
                content:{
                    'application/json': {
                        schema:{
                            $ref:'#/components/schemas/CreateBank'
                        }
                    }
                }
            },
            responses:{
                '201':{
                    description:"bank were created successfully",
                    content:{
                        'application/json':{
                            schema:{
                                $ref:'#/components/schemas/Bank'
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
    '/api/banks/{id}': {
        get:{
            tags: ['Bank operations'],
            description: "Get a bank",
            operationId: "getBankById",
            parameters:[
                {
                    name:"id",
                    in:"path",
                    schema:{
                        $ref:"#/components/schemas/BankId"
                    },
                    required:true,
                }
            ],
            responses:{
                '200':{
                    description:"bank is obtained",
                    content:{
                        'application/json':{
                            schema:{
                                $ref:"#/components/schemas/Bank"
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
                                    message:"We can't find the bank",
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