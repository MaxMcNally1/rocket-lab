# rocket-lab


This project is a Node.js application that provides a RESTful API for managing a hierarchical structure of rocket components. It uses MongoDB as its database, Mongoose for schema modeling, and Express for handling HTTP requests.

Features
The application exposes the following HTTP endpoints for performing CRUD operations on the rocket component nodes:

1. Create a node with a specified parent

2. Add a property on a specific node

3. Return the subtree of nodes with their properties for a provided node path

The application also includes unit tests for the third endpoint using Jest.


Getting Started

Prerequisites

Before running the application, make sure you have the following installed:

Node.js (version 14 or higher)
npm (version 6 or higher)
MongoDB (version 4 or higher)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/rocket_exam.git
cd rocket_exam
Install the dependencies:

bash
Copy code
npm install
Start the MongoDB server:

bash
Copy code
mongod
(Ensure that the MongoDB server is running and listening on the default port 27017.)

Seed the database with sample data:

bash
Copy code
node seed.js
Start the application:

bash
Copy code
npm start
The application should now be running on http://localhost:3000.

Running Tests
To run the unit tests, simply execute the following command:

bash
Copy code
npm test
This will run the Jest test suite and display the results in the terminal.

API Documentation
Create a Node with a Specified Parent
Endpoint: POST /node/parent/:parentId
Params: parentId (the ID of the parent node)
Body: JSON object with the following properties:
name (string, required) - the name of the new node
properties (array, optional) - an array of key-value pairs representing properties of the new node
Add a Property on a Specific Node
Endpoint: PATCH /node/:nodeId/property
Params: nodeId (the ID of the node to add a property to)
Body: JSON object with the following properties:
key (string, required) - the key of the new property
value (number, required) - the value of the new property
Return the Subtree of Nodes with Their Properties for a Provided Node Path
Endpoint: GET /node/subtree/:path
Params: path (a slash-separated string representing the node path)
