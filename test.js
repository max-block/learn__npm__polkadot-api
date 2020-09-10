const {ApiPromise, WsProvider} = require('@polkadot/api')
require("dotenv").config()

const NODE = process.env.NODE || 'wss://rpc.polkadot.io'
const ADDRESS = process.env.ADDRESS

async function main() {
    const api = await ApiPromise.create({provider: new WsProvider(NODE)});

    const {nonce, data: balance} = await api.query.system.account(ADDRESS)

    console.log(`nonce: ${nonce}, balance: ${balance}`)

    await api.disconnect()
}


main().catch(err => console.log(err))