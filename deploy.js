const HDWAlletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWAlletProvider(
   'side park wait diary lunar basic staff foot involve diary gaze predict',
   'https://rinkeby.infura.io/HvMEviDI6yXbeKnVIDCu'
);

const web3 = new Web3(provider);

const deploy = async () => {

    const accounts = await web3.eth.getAccounts();

    console.log('attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there!']})
    .send( { gas:'1000000', from: accounts[0]});

    console.log('Contract deployed to', result.options.address);

};

deploy();
