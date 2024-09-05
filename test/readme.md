# CRUD API AUTOMATION TESTS

This project contains a test suite for the Crud API. It uses `chai` for assertions and includes tests for various CRUD operations on the `/crudcrud` endpoint. The tests cover `POST`, `GET`, `PUT`, and `DELETE` methods to ensure the proper functioning of the API.

## Prerequisites

Before running the tests, make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository:

   git clone https://github.com/yourusername/api-swagger-automation.git
   cd api-swagger-automation/src

2. Install the necessary dependencies:

   npm install

3. Project Structure

 - api.action.js: Contains functions to interact with the Crud API endpoints.
 - config.json: Contains configs like URL and uniqueid for the endpoint
 - data.json: Contains data structured in json format for data driven testing
 - schema.js: Contains schema for response schema validations
 - test.js: Contains the test files for various API operations.
 - package.js: Contains all the dependencies

4. Running the Tests

To run the tests, use the following command:

   npx mocha

