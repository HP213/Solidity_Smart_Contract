const path = require('path');
const fs  = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');
// console.log(source);

module.exports  = solc.compile(source, 1).contracts[':Inbox']; //1 represents number of contracts we want to compile
