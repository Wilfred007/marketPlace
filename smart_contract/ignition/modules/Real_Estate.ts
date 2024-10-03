// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const Real_estate = buildModule("Real_estate", (m) => {
 

  const lock = m.contract("Real_estate");

  return { lock };
});

export default Real_estate;
