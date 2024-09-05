import Joi from 'joi';

 export function employeesSchema(){
    return Joi.array().items(employeeSchema())
    }

 export function employeeSchema(){
    return Joi.object({
        _id: Joi.string().required(),
        Employee: Joi.object({
            FirstName: Joi.string().required(),
            LastName: Joi.string().required(),
            DateOfBirth: Joi.string().required(),
            StartDate: Joi.string().required(),
            Department: Joi.string().required(),
            JobTitle: Joi.string().required(),
            Email: Joi.string().required(),
            Mobile: Joi.string().required(),
            Address: Joi.string().required(),
            BaseSalary: Joi.string().required(),
    })
    })
 }