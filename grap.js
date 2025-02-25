import fetch from 'node-fetch';
import fs from 'fs';
import { accounts, getRandomUserAgent, proxyFile } from './config.js'; // Impor dari config.js

// Fungsi untuk membuat konfigurasi fetch
function createConfig(authToken) {
    return {
        method: 'GET',
        headers: {
            accept: '*/*',
            'accept-language': 'en-US,en;q=0.9',
            authorization: `Bearer ${authToken}`,
            'content-type': 'application/json',
            priority: 'u=1, i',
            'sec-ch-ua': '"Not A(Brand";v="8", "Chromium";v="132", "Brave";v="132"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'cross-site',
            'sec-gpc': '1',
            Referer: 'https://bless.network/',
            RefererPolicy: 'strict-origin-when-cross-origin',
            'User-Agent': getRandomUserAgent() // Gunakan User-Agent acak
        }
    };
}

// Fungsi untuk mengambil node id berdasarkan auth token
async function fetchNodeId(authToken) {
    const config = createConfig(authToken);
    try {
        const response = await fetch('https://gateway-run-indexer.bls.dev/api/v1/nodes', config);
        const data = await response.json();
        const pubKeys = data.map(item => `"${item.pubKey}"`);
        return pubKeys;
    } catch (error) {
        console.error(`Error fetching node id for authToken ${authToken}:`, error);
        return null;
    }
}

// Main program
(async () => {
    let allPubKeys = [];

    for (const account of accounts) {
        const pubKeys = await fetchNodeId(account.AUTH_TOKEN);
        if (pubKeys) {
            allPubKeys.push(`// AUTH_TOKEN : ${account.AUTH_TOKEN}`);
            pubKeys.forEach((pubKey, index) => {
                allPubKeys.push(pubKey);
                if ((index + 1) % 5 === 0) {
                    allPubKeys.push(''); // Tambahkan baris baru setiap 5 pubKeys
                }
            });
        }
    }

    // Format pubKeys ke dalam string
    const formattedPubKeys = allPubKeys.join('\n');

    // Simpan semua pubKeys ke dalam file teks
    fs.writeFile('pubKeys.txt', formattedPubKeys, (err) => {
        if (err) {
            console.error('Error saat menyimpan pubKeys:', err);
        } else {
            console.log('pubKeys berhasil disimpan ke pubKeys.txt');
        }
    });
})();