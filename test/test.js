import * as CRUD from './api.action.js';
import * as Schema from './schema.js';
import Dataset from './data.json' assert { type: 'json' };
import { expect } from 'chai';
import Joi from 'joi';

let employees = [];

//@@@All POST endpoint operation tests  
describe('Test CRUD Endpoint - POST', function() { 
  this.timeout(5000); 
  it("POST Crud - Create an Employee Record", async function() { 
    let response = await CRUD.postCreateEmployee(Dataset.Data[0]);
    expect(response.status,'The response status should be 201 after creating an employee').to.equal(201);
  });

});

//@@@All GET endpoint operation tests     
describe('Test CRUD Endpoint - GET', () => { 
  it("GET CRUD - Get all employee record created", async () => {
    let response = await CRUD.getEmployees();
    employees=response.data;
    expect(response.status).to.equal(200);
    expect(employees[0].Employee).to.deep.equal(Dataset.Data[0].Employee,'Employee record should match with the data used to create');
    Joi.assert(employees, Schema.employeesSchema());
  });  

  it("GET Crud - Get an employee record created using id", async () => {
    let response = await CRUD.getEmployee(employees[0]._id);
    expect(response.status).to.equal(200);
    expect(response.data.Employee).to.deep.equal(Dataset.Data[0].Employee,'Employee record should match with the data against the id');
    Joi.assert(response.data, Schema.employeeSchema());
  })

  it("GET Crud - Get an employee record created using an invalid id", async () => {
    try {
      let response = await CRUD.getEmployee(Dataset.Data.dummyId);
      expect(response.status, 'The response status should be 404 for an invalid employee ID').to.equal(404);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        expect(error.response.status, 'Expected 404 error').to.equal(404);
      } else {
        // To handle unexpected errors other than 404
        console.error('Unexpected error:', error.response ? error.response.data : error.message);
        throw error; 
      }
    }
  });
  

});

//@@@All PUT endpoint operation tests     
describe('Test CRUD Endpoint - PUT', () => {
  it("PUT Crud - update an existing employee", async () => {
    let response = await CRUD.putEmployee(Dataset.Data[1],employees[0]._id);
    expect(response.status).to.equal(200);
  });

  it("GET Crud - Get updated employee record created using id", async () => {
    let response = await CRUD.getEmployee(employees[0]._id);
    expect(response.status).to.equal(200);
    expect(response.data.Employee).to.deep.equal(Dataset.Data[1].Employee,'Employee record should match with the data used to update');
    Joi.assert(response.data, Schema.employeeSchema());
  })

});

  //@@@All DELETE endpoint operation tests     
describe('Test CRUD Endpoint - DELETE', () => {
  it("DELETE Crud - delete an existing employee", async () => {
    let response = await CRUD.deleteEmployee(employees[0]._id);
    expect(response.status).to.equal(200);
  });
  it("GET CRUD - Get all employee record created", async () => {
    let response = await CRUD.getEmployees();  
    expect(response.status).to.equal(200);
    expect(response.data, 'Employee record should be empty').to.be.an('array').that.is.empty;

  });  
  
});

