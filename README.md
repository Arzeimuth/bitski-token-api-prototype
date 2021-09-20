# Bitski Token API NodeJS

This package allows you to access the live Bitski Token API to grab 

## Example Usage

You can pass in your `wallet address` and `chainId`. Use the default `1` for mainnet.

```
const { getAccountTokens } = require('bitski-token-api-js')

/** ---
    acquire Wallet Address
---- */

async function getWalletInfo() {
    const result = await getAccountTokens('0xf020b2AE0995ACeDFf07f9FC8298681f5461278A', 1);
    console.log(result)
}

getWalletInfo();
```

## Example Callback

This JS library wraps the API response with additional lower-hanging information for a consistent data model between the Bitski API and the front-end.

```
{
  status: 'OK',
  data: {
    nfts: [],
    currencies: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object]
    ]
  }
}
```

## Example Currency Token

Here is an example of a currency token with assorted fields.

```
{
    price: 0.9933127,
    balance: '160000071',
    address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    decimals: '6',
    name: 'USD Coin',
    symbol: 'USDC'
}
```