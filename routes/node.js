var express = require('express');
var router = express.Router();
const nodeCTRL = require('../controllers/node')



router.post("/parent/:parentId", nodeCTRL.createWithParent);

router.patch("/:nodeId/property", nodeCTRL.addProperty);

router.get("/subtree/*", nodeCTRL.getSubtree);


module.exports = router;
