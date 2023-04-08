// viewData.js

const Node = require('./models/node');
require('./config/database');

(async function () {
  await printAllNodes();
  const rootNode = await Node.findOne({ name: 'Rocket' });
  const tree = await getTree(rootNode);
  console.log('Tree structure:');
  console.log(JSON.stringify(tree, null, 2));
  process.exit();
})();

async function printAllNodes() {
  const nodes = await Node.find({});
  console.log('All nodes in the database:');
  nodes.forEach(node => console.log(JSON.stringify(node, null, 2)));
}

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
