const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');// W capital represents contructor of web3 using instances of web3
// const web3 = new Web3(ganache.provider()); //This was old method and not in use
const provider = ganache.provider();
const web3 =  new Web3('http://127.0.0.1:8545');// Run ganache-cli in other prompt and keep it running and pick port from there
const {interface , bytecode} = require("../compile.js")
let accounts;
let inbox;
let address;

beforeEach( async ()=>{
  //Get list of all accounts
  accounts = await web3.eth.getAccounts();
  //Use one of the account to deploy the contract
  inbox = await new web3.eth.Contract(JSON.parse(interface));

    inbox.deploy({ data : bytecode, arguments: ['Hi There'] })
    .send({ from : accounts[0], gas: 4700000 }).catch((e)=>{
      console.log(e);
    })
  //
  // inbox.setProvider(provider);
  // console.log(address);
});

describe('Inbox', ()=>{
  it('deploys a contract', ()=>{
    console.log(inbox);
  })
})
