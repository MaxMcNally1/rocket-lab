const RocketNode = require("./models/node");
require("./config/database");

(async function () {
  await seedData();
  console.log("Data seeded successfully!");
  process.exit();
})();

async function seedData() {
  // Create and save the nodes
  const rocketNode = new RocketNode({
    name: "Rocket",
    properties: [
      { key: "Height", value: 18.000 },
      { key: "Mass", value: 12000.000 },
    ],
  });
  await rocketNode.save();

  const stage1Node = new RocketNode({ name: "Stage1" });
  const stage2Node = new RocketNode({ name: "Stage2" });

  await stage1Node.save();
  await stage2Node.save();

  const stage1Engines = [
    { name: "Engine1", properties: [{ key: "Thrust", value: 9.493 }, { key: "ISP", value: 12.156 }] },
    { name: "Engine2", properties: [{ key: "Thrust", value: 9.413 }, { key: "ISP", value: 11.632 }] },
    { name: "Engine3", properties: [{ key: "Thrust", value: 9.899 }, { key: "ISP", value: 12.551 }] },
  ];

  const stage2Engines = [
    { name: "Engine1", properties: [{ key: "Thrust", value: 1.622 }, { key: "ISP", value: 15.110 }] },
  ];

  for (const engineData of stage1Engines) {
    const engineNode = new RocketNode(engineData);
    await engineNode.save();
    stage1Node.children.push(engineNode);
  }

  for (const engineData of stage2Engines) {
    const engineNode = new RocketNode(engineData);
    await engineNode.save();
    stage2Node.children.push(engineNode);
  }

  await stage1Node.save();
  await stage2Node.save();

  rocketNode.children.push(stage1Node, stage2Node);
  await rocketNode.save();
}
