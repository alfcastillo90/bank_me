export const wireTransfers = {
    '/api/wire-transfers': {
        get:{
            tags: ['WireTransfer operations'],
            description: "Get wire transfers",
            operationId: 'getWireTransfers',
            parameters:[],
            responses:{
                '200':{
                    description:"wire transfers were obtained",
                    content:{
                        'application/json':{
                            schema:{
                                $ref:'#/components/schemas/WireTransfer'
                            }
                        }
                    }
                }
            }
        },
        post:{
            tags:['WireTransfer operations'],
            description: "Create wire transfer",
            operationId: "createWireTransfer",
            parameters:[],
            requestBody: {
                content:{
                    'application/json': {
                        schema:{
                            $ref:'#/components/schemas/WireTransfer'
                        }
                    }
                }
            },
            responses:{
                '201':{
                    description:"wire transfer were created successfully",
                    content:{
                        'application/json':{
                            schema:{
                                $ref:'#/components/schemas/WireTransfer'
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
    '/api/wire-transfers/account-number/{accountNumber}': {
        get:{
            tags: ['WireTransfer operations'],
            description: "Get wire transfer information provided by account number",
            operationId: "getWireTransferById",
            parameters:[
                {
                    name:"id",
                    in:"path",
                    schema:{
                        $ref:"#/components/schemas/BankAccountNumber"
                    },
                    required:true,
                }
            ],
            responses:{
                '200':{
                    description:"wire transfer information is obtained",
                    content:{
                        'application/json':{
                            schema:{
                                $ref:"#/components/schemas/WireTransfer"
                            }
                        }
                    }
                },
                '404':{
                    description: "Wire transfer is not found",
                    content:{
                        'application/json':{
                            schema:{
                                $ref:'#/components/schemas/Error',
                                example:{
                                    message:"We can't find the wire transfer",
                                    internal_code:"Invalid id"
                                }
                            }
                        }
                    }
                }
            }
        },
    },
    '/api/wire-transfers/bank/{bankId}': {
        get:{
            tags: ['WireTransfer operations'],
            description: "Get wire transfer information provided by bank id",
            operationId: "getWireTransferById",
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
                    description:"wire transfer information is obtained",
                    content:{
                        'application/json':{
                            schema:{
                                $ref:"#/components/schemas/WireTransfer"
                            }
                        }
                    }
                },
                '404':{
                    description: "Wire transfer is not found",
                    content:{
                        'application/json':{
                            schema:{
                                $ref:'#/components/schemas/Error',
                                example:{
                                    message:"We can't find the wire transfer",
                                    internal_code:"Invalid id"
                                }
                            }
                        }
                    }
                }
            }
        },
    },
    '/api/wire-transfers/customer/{customerId}': {
        get:{
            tags: ['WireTransfer operations'],
            description: "Get customer wire transfers",
            operationId: "getWireTransfersByCustomer",
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
                    description:"wire transfers information is obtained",
                    content:{
                        'application/json':{
                            schema:{
                                $ref:"#/components/schemas/Cistp,er"
                            }
                        }
                    }
                },
                '404':{
                    description: "Wire transfer is not found",
                    content:{
                        'application/json':{
                            schema:{
                                $ref:'#/components/schemas/Error',
                                example:{
                                    message:"We can't find the wire transfer",
                                    internal_code:"Invalid id"
                                }
                            }
                        }
                    }
                }
            }
        },
    },
    '/api/wire-transfers/id/{id}': {
        get:{
            tags: ['WireTransfer operations'],
            description: "Get wire transfer information provided by id",
            operationId: "getWireTransferById",
            parameters:[
                {
                    name:"id",
                    in:"path",
                    schema:{
                        $ref:"#/components/schemas/WireTransferId"
                    },
                    required:true,
                }
            ],
            responses:{
                '200':{
                    description:"wire transfer information is obtained",
                    content:{
                        'application/json':{
                            schema:{
                                $ref:"#/components/schemas/WireTransfer"
                            }
                        }
                    }
                },
                '404':{
                    description: "Wire transfer is not found",
                    content:{
                        'application/json':{
                            schema:{
                                $ref:'#/components/schemas/Error',
                                example:{
                                    message:"We can't find the wire transfer",
                                    internal_code:"Invalid id"
                                }
                            }
                        }
                    }
                }
            }
        },
    },
}