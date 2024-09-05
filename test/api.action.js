import axios from 'axios';
import DATA from './config.json' assert { type: 'json' };

const CRUD = `${DATA.URL}/${DATA.uniqueId}`;

//@@Create an employee as per the JSON payload
export function postCreateEmployee(data) {
    let api = `${CRUD}/Employee`;
    
    const any = {  
                headers: {
                    accept: 'application/json',
                   'Content-Type': 'application/json'
                
       }   };
    return axios.post(api, data, any )
  }

  //@@Get all employee records created
  export function getEmployees() {
    let api = `${CRUD}/Employee`;
    const any =  {
                headers: {
                    accept: 'application/json'
                }
            }
    return axios.get(api, any)
  }

  //@@Get an employee record created passing id
  export function getEmployee(id) {
    let api = `${CRUD}/Employee/${id}`;
    const any =  {
                headers: {
                    accept: 'application/json'
                }
            }
    return axios.get(api, any)
  }


  //@@Update an existing employee details in the record 
  export function putEmployee(data, id) {
    let api = `${CRUD}/Employee/${id}`;
    
    const any = {  
                headers: {
                    accept: 'application/json',
                    'Content-Type': 'application/json'
                
       }   };
    return axios.put(api, data, any )
  }

  //@@Deletes an existing employee in the record
  export function deleteEmployee(id) {
    let api = `${CRUD}/Employee/${id}`;
    
    const any = {  
                headers: {
                    accept: 'application/json'
                
       }   };
    return axios.delete(api, any )
  }
