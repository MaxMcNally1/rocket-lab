# Node Hierarchy API

This Node Hierarchy API is a Node.js application built with Express and Mongoose that allows you to create a tree-like structure of nodes with properties and manage their hierarchy.

## Features

- Create a node with a specified parent
- Add properties to a node
- Retrieve a subtree rooted at a specified node

## Prerequisites

- Node.js >= v14.x.x
- MongoDB >= v4.x.x

## Setup

1. Clone this repository:
   git clone https://github.com/MaxMcNally1/rocket-lab.git

2. Install the dependencies:
   cd into repo
   npm install

3. Make sure MongoDB is running on your local machine or update the MongoDB connection string in config/database.js to point to your database server.

4. Seed the database with initial data:
   node seed.js

5. Start the server:

   npm start


## API Endpoints

### Create a node with a specified parent

- Method: POST
- Endpoint: /node/parent/:parentId
- Request Body:
  {
    "name": "NewNode",
    "properties": [
      {
        "key": "ExampleKey",
        "value": 123
      }
    ]
  }
- cURL example:
  curl -X POST -H "Content-Type: application/json" -d '{"name": "NewNode", "properties": [{"key": "ExampleKey", "value": 123}]}' http://localhost:3000/node/parent/:parentId

### Add a property to a node

- Method: PATCH
- Endpoint: /node/:nodeId/property
- Request Body:
  {
    "key": "NewProp",
    "value": 456
  }
- cURL example:
  curl -X PATCH -H "Content-Type: application/json" -d '{"key": "NewProp", "value": 456}' http://localhost:3000/node/:nodeId/property

### Get a subtree rooted at a specified node

- Method: GET
- Endpoint: /node/subtree/:path
  (Replace :path with the path to the node, e.g., Rocket/Stage1/Engine1)

- cURL example:
  curl -X GET http://localhost:3000/node/subtree/Rocket/Stage1/Engine1

### Get a subtree rooted at a specified node
- Run unit test: npm test
