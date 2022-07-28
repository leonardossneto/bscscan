const axios = require('axios');

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_API_URL;

export async function getBnbBalance(address){
    const url = `${API_URL}?module=account&action=balance&address=${address}&apikey=${API_KEY}`;
    const response = await axios.get(url);
    const balance = parseFloat(response.data.result) / 1000000000000000000;
    return balance;
}

export async function getTokenBalance(address, contract){
    const url = `${API_URL}?module=account&action=tokenbalance&address=${address}&contractaddress=${contract}&apikey=${API_KEY}`;
    const response = await axios.get(url);
    const balance = parseFloat(response.data.result) / 1000000000000000000;
    return balance;
}

export async function getContract(contract){
    const url = `${API_URL}?module=contract&action=getsourcecode&address=${contract}&apikey=${API_KEY}`;
    const response = await axios.get(url);
    return response.data;
}

export async function getBnbTransfers(address){
    const url = `${API_URL}?module=account&action=txlist&address=${address}&apikey=${API_KEY}&sort=desc`;
    const response = await axios.get(url);
    return response.data;
}

export async function getTokenTransfers(address){
    const url = `${API_URL}?module=account&action=tokentx&address=${address}&apikey=${API_KEY}&sort=desc`;
    const response = await axios.get(url);
    return response.data;
}

getBnbBalance('0xF745b04626066F619426e85CAB3046c0E8bE3c9B');