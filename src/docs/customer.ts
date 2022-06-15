export const customers = {
    '/api/customers': {
        get:{
            tags: ['Customer operations'],
            description: "Get customers",
            operationId: 'getCustomers',
            parameters:[],
            responses:{
                '200':{
                    description:"customers were obtained",
                    content:{
                        'application/json':{
                            schema:{
                                $ref:'#/components/schemas/Customer'
                            }
                        }
                    }
                }
            }
        },
        post:{
            tags:['Customer operations'],
            description: "Create customer",
            operationId: "createCustomer",
            parameters:[],
            requestBody: {
                content:{
                    'application/json': {
                        schema:{
                            $ref:'#/components/schemas/Customer'
                        }
                    }
                }
            },
            responses:{
                '201':{
                    description:"customer were created successfully",
                    content:{
                        'application/json':{
                            schema:{
                                $ref:'#/components/schemas/Customer'
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
    '/api/customers/id/{id}': {
        get:{
            tags: ['Customer operations'],
            description: "Get customer information provided by id",
            operationId: "getCustomerById",
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
                    description:"customer information is obtained",
                    content:{
                        'application/json':{
                            schema:{
                                $ref:"#/components/schemas/Customer"
                            }
                        }
                    }
                },
                '404':{
                    description: "Customer is not found",
                    content:{
                        'application/json':{
                            schema:{
                                $ref:'#/components/schemas/Error',
                                example:{
                                    message:"We can't find the customer",
                                    internal_code:"Invalid id"
                                }
                            }
                        }
                    }
                }
            }
        },
        put:{
            tags:['Customer operations'],
            description: "Update customer",
            operationId: "updateCustomer",
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
            requestBody: {
                content:{
                    'application/json': {
                        schema:{
                            $ref:'#/components/schemas/Customer'
                        }
                    }
                }
            },
            responses:{
                '201':{
                    description:"customer were created successfully",
                    content:{
                        'application/json':{
                            schema:{
                                $ref:'#/components/schemas/Customer'
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
    '/api/customers/disable/{id}': {
        patch: {
            tags: ['Customer operations'],
            description: "Disable customer",
            operationId: "disableCustomer",
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
                    description:"customer were disabled",
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