const mongoose = require('mongoose');
const Node = require('./models/node');
require('./config/database');

(async function () {
  await deleteAllNodes();
  console.log("All nodes deleted successfully!");
  process.exit();
})();

async function deleteAllNodes() {
  try {
    await Node.deleteMany({});
    console.log('All nodes deleted');
  } catch  (err) {
    console.log('Error:', err);
  }
}
