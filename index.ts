import Web3 from 'web3';

const NODE_URL = `https://mainnet.infura.io/v3/1f6794bd3cf84c06bfb326cf897d1f3d`;
const web3 = new Web3(new Web3.providers.HttpProvider(NODE_URL));
const address = '0x7565D8BF5d36a05938725AdaB5799Cd8De34553a'
web3.eth.getBalance(address).then(res =>{
    console.log(`res=======> ${res}`)
}).catch(e => {
    console.log("e============>,", e)
})


const account = web3.eth.accounts.create();
console.log(`account.address===========> ${account.address}`);



const main = async () => {
    // Get the latest block number
    const latestBlockNumber = await web3.eth.getBlockNumber();
    console.log(`Latest block number: ${latestBlockNumber}`);

    // Get the latest block details
    const latestBlock = await web3.eth.getBlock(latestBlockNumber);
    console.log(`Latest block details: ${JSON.stringify(latestBlock, null, 2)}`);

    // Get the balance of an address (replace with any Ethereum address)
    const address = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e';
    const balance = await web3.eth.getBalance(address);
    console.log(`Balance of address ${address}: ${web3.utils.fromWei(balance, 'ether')} ETH`);
};

main().catch(err => {
    console.error(`=========Error: ${err.message}`);
});
