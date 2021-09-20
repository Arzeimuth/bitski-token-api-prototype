const axios = require('axios');
const https = require('https');
const url = 'https://api.bitski.com/v1/';


async function getAccountTokens(address, chainId) {
    const instance = axios.create({
        httpsAgent: new https.Agent({  
              rejectUnauthorized: false
        })
    });
    const fUrl = url + 'tokens/' + address + '?chain_id=' + (chainId === undefined ? '1' : chainId.toString());
    return instance.get(fUrl).then((res) => {
        //transform
        return {
            'status': 'OK',
            'data': res.data
        }
    }).catch((err) => {
        //transform
        return {
            'status': 'error',
            'code': err.code,
            'error': err
        }
    })
}

async function transferToken(from, to, token, amount) {
    const fUrl = url + 'transfers/' + from + to + token + amount
    return axios(fUrl);
}

module.exports = {
    getAccountTokens, transferToken
}
