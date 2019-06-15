const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');// W capital represents contructor of web3 using instances of web3
const web3 = new Web3(ganache.provider());
const {interface , bytecode} = require("../compile.js")
let accounts;
let inbox;

beforeEach( async ()=>{
  //Get list of all accounts
  accounts = await web3.eth.getAccounts();


  //Use one of the account to deploy the contract
  inbox = await new  web3.eth.Contract(JSON.parse(interface))
    .deploy({ data : bytecode, arguments: ['Hi There'] })
    .send({ from : accounts[0], gas: '1000000' });
});

describe('Inbox', ()=>{
  it('deploys a contract', ()=>{
    console.log(accounts);
    // console.log(inbox);
  })
})
