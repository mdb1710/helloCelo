// add package imports and setup up here

const Kit = require("@celo/contractkit");

const kit = Kit.newKit("https://alfajores-forno.celo-testnet.org");

const getAccount = require("./getAccount").getAccount;

let anAddress = "0xD86518b29BB52a5DAC5991eACf09481CE4B0710d";

async function awaitWrapper() {
  // add async/await code in this function
  let account = await getAccount();
  let goldtoken = await kit.contracts.getGoldToken();
  let balance = await goldtoken.balanceOf(anAddress);

  console.log(account.address);
  console.log(balance.toString());
}

awaitWrapper();
