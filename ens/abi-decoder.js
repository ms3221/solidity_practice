const abiDecoder = require("abi-decoder"); // NodeJS
module.exports.Abi = [
  {
    inputs: [
      {
        internalType: "contract BaseRegistrar",
        name: "_base",
        type: "address",
      },
      {
        internalType: "contract PriceOracle",
        name: "_prices",
        type: "address",
      },
      { internalType: "uint256", name: "_minCommitmentAge", type: "uint256" },
      { internalType: "uint256", name: "_maxCommitmentAge", type: "uint256" },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "string", name: "name", type: "string" },
      {
        indexed: true,
        internalType: "bytes32",
        name: "label",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cost",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expires",
        type: "uint256",
      },
    ],
    name: "NameRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "string", name: "name", type: "string" },
      {
        indexed: true,
        internalType: "bytes32",
        name: "label",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cost",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expires",
        type: "uint256",
      },
    ],
    name: "NameRenewed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oracle",
        type: "address",
      },
    ],
    name: "NewPriceOracle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    constant: true,
    inputs: [],
    name: "MIN_REGISTRATION_DURATION",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "string", name: "name", type: "string" }],
    name: "available",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "bytes32", name: "commitment", type: "bytes32" }],
    name: "commit",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    name: "commitments",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "isOwner",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      { internalType: "string", name: "name", type: "string" },
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "bytes32", name: "secret", type: "bytes32" },
    ],
    name: "makeCommitment",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      { internalType: "string", name: "name", type: "string" },
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "bytes32", name: "secret", type: "bytes32" },
      { internalType: "address", name: "resolver", type: "address" },
      { internalType: "address", name: "addr", type: "address" },
    ],
    name: "makeCommitmentWithConfig",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "maxCommitmentAge",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "minCommitmentAge",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "string", name: "name", type: "string" },
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "uint256", name: "duration", type: "uint256" },
      { internalType: "bytes32", name: "secret", type: "bytes32" },
    ],
    name: "register",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "string", name: "name", type: "string" },
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "uint256", name: "duration", type: "uint256" },
      { internalType: "bytes32", name: "secret", type: "bytes32" },
      { internalType: "address", name: "resolver", type: "address" },
      { internalType: "address", name: "addr", type: "address" },
    ],
    name: "registerWithConfig",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "string", name: "name", type: "string" },
      { internalType: "uint256", name: "duration", type: "uint256" },
    ],
    name: "renew",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      { internalType: "string", name: "name", type: "string" },
      { internalType: "uint256", name: "duration", type: "uint256" },
    ],
    name: "rentPrice",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "uint256", name: "_minCommitmentAge", type: "uint256" },
      { internalType: "uint256", name: "_maxCommitmentAge", type: "uint256" },
    ],
    name: "setCommitmentAges",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "contract PriceOracle",
        name: "_prices",
        type: "address",
      },
    ],
    name: "setPriceOracle",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "bytes4", name: "interfaceID", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "string", name: "name", type: "string" }],
    name: "valid",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "withdraw",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

function test() {
  abiDecoder.addABI(testABI);
  const testData =
    "0xf7a1696300000000000000000000000000000000000000000000000000000000000000c00000000000000000000000007e108ba31a178cfd96a0405f68d247f96467b47a0000000000000000000000000000000000000000000000000000000003c30ab03b1bb7a3312443f6438614041bfe5eb0418020033185ee326385fab27ef70ffb0000000000000000000000004976fb03c32e5b8cfe2b6ccb31c09ba78ebaba410000000000000000000000007e108ba31a178cfd96a0405f68d247f96467b47a0000000000000000000000000000000000000000000000000000000000000009747261706174686f6e0000000000000000000000000000000000000000000000";
  const decodedData = abiDecoder.decodeMethod(testData);
  console.log(decodedData);

  //   web3.eth.getTransactionReceipt(
  //     "0x9199e262aaab0a6ec99558b3e9f42397c07a2bb9c6befb637643aebfb03cc32a",
  //     function (e, receipt) {
  //       const decodedLogs = abiDecoder.decodeLogs(receipt.logs);
  //     }
  //   );
}
