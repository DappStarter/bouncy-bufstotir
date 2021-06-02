require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune shoulder name raise stereo solar inner knife bottom topple'; 
let testAccounts = [
"0x8b8f3efec3be51d4cd24b3fcfcf0bf67a1f08fee584e95d03b31f7ffdad28797",
"0x44b9133c6844b85b521c0571b2f0b644170da26ee4432d9b2d2b9c5559271f07",
"0x9652149130cc9a755766e90537d329d3033949b19ec0dcdb5387b491e8a06a1c",
"0xd95b6dad887e05f4392e0a2b37e841c7aa6b27f89240cf4a44771f728d0fa120",
"0xca5e72c89d183cd74aaa6790b475dcb2b552e634104944093d4f5881828db947",
"0x29874a4b7a806dcaf5903ef108986ce8254e29fb404ddb079abc8cf242960d69",
"0xe0e27d777e6a62d09f463ed3046322c47d40e35d91695be35712605d2da85f07",
"0x3659ae0e690d78e4f62e30a0931e48157677ce162a91c8d55fc130f9a4885eef",
"0xf1d7de7502c4f4a882c3547db9a3d53c6798eb6810e6f8a3b970eabbf51a4964",
"0x7cae358c46ae3efef37139e23e48d21abf7ee8eaa1f043583029bf3289ec643c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

