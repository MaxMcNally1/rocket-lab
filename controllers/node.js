const Node = require('../models/node');

module.exports = {
    createWithParent,
    addProperty,
    getSubtree,
    getTree,
  };


async function getTree(node) {
    const children = await Node.find({ _id: { $in: node.children } });
    const populatedChildren = await Promise.all(children.map(child => getTree(child)));
  
    return {
      _id: node._id,
      name: node.name,
      properties: node.properties,
      children: populatedChildren,
    };
  }
  

async function getSubtree(req, res) {
    try {
      const pathArray = req.params[0].split("/");
      let currentNode = await Node.findOne({ name: pathArray[0] });
  
      if (!currentNode) {
        return res.status(404).send("Node not found");
      }
  
      for (let i = 1; i < pathArray.length; i++) {
        const childNode = await Node.findOne({ _id: { $in: currentNode.children }, name: pathArray[i] });
  
        if (!childNode) {
          return res.status(404).send("Node not found in the given path");
        }
  
        currentNode = childNode;
      }
  
      const subtree = await getTree(currentNode);
      res.json(subtree);
    } catch (err) {
      console.error("Error:", err);
      res.status(500).send("Internal Server Error");
    }
  }
  
  

async function addProperty(req, res) {
    try {
      const node = await Node.findById(req.params.nodeId);
      if (!node) {
        return res.status(404).send("Node not found");
      }
  
      node.properties.push(req.body);
      await node.save();
  
      res.status(200).json(node);
    } catch (err) {
      console.log("Error:", err);
      res.status(500).send("Internal Server Error");
    }
  }


async function createWithParent(req, res) {
    try {
      const parentNode = await Node.findById(req.params.parentId);
      if (!parentNode) {
        return res.status(404).send("Parent node not found");
      }
  
      const newNode = new Node(req.body);
      await newNode.save();
  
      parentNode.children.push(newNode);
      await parentNode.save();
  
      res.status(201).json(newNode);
    } catch (err) {
      console.log("Error:", err);
      res.status(500).send("Internal Server Error");
    }
  }


  
