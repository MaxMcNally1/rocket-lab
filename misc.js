1. Create a node with a specified parent

curl -X POST -H "Content-Type: application/json" -d '{"name": "Node121", "properties": [{"key": "Dog Age", "value": 7}]}' http://localhost:3000/node/parent/642f32216110e8713d81d2a2

{
    "_id": "642f32216110e8713d81d2a2",
    "name": "Stage1",
    "children": [
      "642f32216110e8713d81d2a6",
      "642f32216110e8713d81d2ad",
      "642f32216110e8713d81d2b4"
    ],
    "properties": [],
    "__v": 1
  }
  

  {"name":"Node121","properties":[{"key":"Dog Age","value":7,"_id":"642f3c23c07b35cb40fe6296"}],"children":[],"_id":"642f3c23c07b35cb40fe6295","__v":0}% 

2. Add a property on a specific node

curl -X PATCH -H "Content-Type: application/json" -d '{"key": "Temperature", "value": 44}' http://localhost:3000/node/642f32216110e8713d81d2a2/property



3. Return the subtree of nodes with their properties for a provided node path

curl -X GET http://localhost:3000/node/subtree/Rocket/Stage1

