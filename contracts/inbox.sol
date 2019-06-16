pragma solidity ^0.4.25;

contract Inbox{
    string public message;

    constructor(string InitialMessage) public{
        message = InitialMessage;
    }

    function setMessage(string newMessage) public{
        message = newMessage;
    }

    function getMessage() public view returns(string){
        return message;
    }
}
