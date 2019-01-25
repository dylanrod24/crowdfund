const hdWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledManager = require('./build/CampaignManager.json');

const provider = new hdWalletProvider(
  'open noodle pass appear lunch exact fence vast void end burden term',
  'https://rinkeby.infura.io/v3/4f823f37f68840ddaa5ce5b39cba6a7c'
);
const web3 = new Web3(provider);

let initalString = 'Hello world';

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledManager.interface)
  )
    .deploy({
      data: compiledManager.bytecode
    })
    .send({
      gas: '1000000',
      from: accounts[0]
    })

  console.log('Contract deployed to', result.options.address);
};
deploy();