require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope area off tragic educate ranch remain unfold include arm bottom ski'; 
let testAccounts = [
"0x0e2e8d1fe9f825e207d51a6d8de9274c61623f0d849c0ad375a7391a1aa83b5b",
"0x597d9ca26f479c9a122f5ee2a9c142729d94268acf16cad35a235c24fccd95a2",
"0xa5cf261b6c47b744157dae24db359bef73f436e2c7468dab3d0b7fadf75826c3",
"0xe7acedf152c0de4709ce28653b93f652f04c388c441d2df9b9c3853c64bc242d",
"0x8961a482d0833a71c454d21a1ab340a3d25a579aee8f93f5289998813c0c0a5d",
"0x63defdc36fb7da0a4bdbd7a91bfc6b63a1c9b0a34fc3d5c3f5ab0d758f0c8ea9",
"0xb91b8678ec81d93b25e8aaeef0238b25b58e68f34e0627c77c5bf5342b3ec3cd",
"0x6467cc28bf809ff4e07d688dca66bad7fbef6c230e32addfc75c6b96630a7128",
"0x45365ddc5a2ebf83f0565538c1ca40f525b8c9281d9168f48bfd49ae2f7c98a4",
"0x1fb974316014bd6ecdfd249ed2ed11b4c1297573c35c410da1939742784d5e33"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


