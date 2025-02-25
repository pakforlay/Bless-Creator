import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
import fs from 'fs';
import { faker } from '@faker-js/faker'; // Import faker untuk generate nama random

// Fungsi untuk mendapatkan email baru dari generator.email
const getEmailRandom = async () => {
    try {
        const res = await fetch('https://generator.email');
        const text = await res.text();
        const $ = cheerio.load(text);
        const result = [];
        $('.e7m.tt-suggestions').find('div > p').each(function (index, element) {
            result.push($(element).text());
        });
        return result;
    } catch (err) {
        console.error(chalk.red("Error Generating email domains : ", err.message));
        return [];
    }
};

const functionGetLink = async (email, domain) => new Promise((resolve, reject) => {
    // Tambahkan penundaan untuk memastikan email sudah diterima
    setTimeout(async () => {
        try {
            const res = await fetch(`https://generator.email/${email}`, {
                headers: {
                    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
                    'accept-language': 'en-US,en;q=0.8',
                    'cookie': `_gid=GA1.2.989703044.1735637209; embx=%5B%22${email}%40${domain}%22%5D; _ga=GA1.1.1696815852.1733235907; __gads=ID=08e2714256afd00c:T=1733235907:RT=1735638862:S=ALNI_MaFvYNYLhdTjGzS2xa3eZ3jls6QMQ; __gpi=UID=00000f7f6013ca38:T=1733235907:RT=1735638862:S=ALNI_MayYarsiugqTzh0Ky4wHiYNrSnGtQ; __eoi=ID=101f6e905a8358a1:T=1733235907:RT=1735638862:S=AA-AfjZCYAfxlwf-nyRYeP_9J9rE; FCNEC=%5B%5B%22AKsRol8j6KSk9Pga59DuS0D4a2pk72ZTqwfVO82pNZ4h-bO_EWCi04aWAU6ULkfWs6oHpsd6Cs949FJ6fmNfbqNhHt8GslL8Aa0Dzr20gerHRB_kL3qK8nW6DeD0WzT9KfeamIWXb1LyD2b7IDCPM94I8fUvBRcTqA%3D%3D%22%5D%5D; _ga_1GPPTBHNKN=GS1.1.1735637208.2.1.1735638882.38.0.0; surl=${domain}%2F${email}`,
                    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
                },
                redirect: 'follow'
            });
            const text = await res.text();
            const $ = cheerio.load(text);

            // Periksa struktur HTML yang diterima
            //console.log(text); // Debugging: Cetak HTML untuk memeriksa struktur

            // Coba ambil OTP dengan selector yang lebih umum
            const otp = $("#email-table > div.e7m.row.list-group-item > div.e7m.col-md-12.ma1 > div.e7m.mess_bodiyy > center > div > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td > table:nth-child(7) > tbody > tr > td > div > div > span").text().trim(); // Sesuaikan selector ini
            if (otp) {
                resolve(otp);
            } else {
                reject(new Error('OTP tidak ditemukan di email.'));
            }
        } catch (err) {
            reject(err);
        }
    }, 5000); // Tunggu 5 detik sebelum mengambil OTP
});

// Fungsi untuk memulai proses OTP
async function startOTPProcess(email) {
    const url = 'https://api.web3auth.io/passwordless-service/api/v3/auth/passwordless/start';
    const data = {
        client_id: "zz6FAnVObMSfLYAk5P3FmJZLZLBHj8uE",
        web3auth_client_id: "BBivautXWZzZ0aVZHi9_zOS-qDm9gwKDdyYE1Ufo2c94JWrGBfsrd2BumCBOXZd63YsHLOnmOHKurV61RhL6h2M",
        connection: "email",
        login_hint: email, // Menggunakan email dari generator.email
        whitelabel: {
            name: "",
            url: "",
            language: "en",
            logo: "",
            theme: {}
        },
        version: "v6",
        network: "sapphire_mainnet",
        flow_type: "code"
    };

    const headers = {
        'Host': 'api.web3auth.io',
        'Content-Length': JSON.stringify(data).length, // Hitung Content-Length secara dinamis
        'Sec-Ch-Ua': '"Chromium";v="125", "Not.A/Brand";v="24"',
        'Sec-Ch-Ua-Platform': '"Windows"',
        'Sec-Ch-Ua-Mobile': '?0',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.112 Safari/537.36',
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': '*/*',
        'Origin': 'https://passwordless.web3auth.io',
        'Sec-Fetch-Site': 'same-site',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        'Priority': 'u=1, i',
        'Connection': 'keep-alive'
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        });
        const responseData = await response.json();
        console.log('Response:', responseData);

        // Jika request OTP berhasil, lanjutkan ke proses verifikasi OTP
        if (responseData && responseData.success === true) {
            const trackingId = responseData.data.trackingId; // Ambil trackingId dari respons
            await verifyOTP(email, trackingId); // Kirim trackingId ke fungsi verifyOTP
        } else {
            console.error('Gagal mengirim OTP.');
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Fungsi untuk memverifikasi OTP
async function verifyOTP(email, trackingId) {
    try {
        // Ambil OTP dari email
        const otp = await functionGetLink(email.split('@')[0], email.split('@')[1]);
        if (!otp) {
            console.error('Gagal mendapatkan OTP.');
            return;
        }

        console.log(`OTP yang ditemukan: ${otp}`); // Debugging: Cetak OTP yang ditemukan

        const url = 'https://api.web3auth.io/passwordless-service/api/v3/auth/passwordless/verify';
        const data = {
            client_id: "zz6FAnVObMSfLYAk5P3FmJZLZLBHj8uE",
            login_hint: email, // Menggunakan email yang sudah diinput sebelumnya
            code: otp, // Menggunakan OTP yang diambil dari email
            connection: "email",
            tracking_id: trackingId, // Menggunakan trackingId dari respons pengiriman OTP
            version: "v6",
            network: "sapphire_mainnet",
            flow_type: "code"
        };

        const headers = {
            'Host': 'api.web3auth.io',
            'Content-Length': JSON.stringify(data).length, // Hitung Content-Length secara dinamis
            'Sec-Ch-Ua': '"Chromium";v="125", "Not.A/Brand";v="24"',
            'Sec-Ch-Ua-Platform': '"Windows"',
            'Sec-Ch-Ua-Mobile': '?0',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.112 Safari/537.36',
            'Content-Type': 'application/json; charset=utf-8',
            'Accept': '*/*',
            'Origin': 'https://passwordless.web3auth.io',
            'Sec-Fetch-Site': 'same-site',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Dest': 'empty',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.9',
            'Priority': 'u=1, i',
            'Connection': 'keep-alive'
        };

        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        });
        const responseData = await response.json();
        console.log('Response:', responseData);

        // Jika verifikasi berhasil, simpan id_token ke file
        if (responseData && responseData.success === true && responseData.id_token) {
            saveTokenToFile(email, responseData.id_token, 'tokens.txt');
        } else {
            console.error('Verifikasi OTP gagal:', responseData);
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Fungsi untuk menyimpan id_token ke file
function saveTokenToFile(email, idToken, filePath) {
    const data = `EMAIL: ${email}\nId_token: ${idToken}\n\n`;
    fs.appendFileSync(filePath, data, 'utf8');
    console.log(`Token untuk ${email} berhasil disimpan.`);
}

// Fungsi utama untuk menjalankan proses
async function main() {
    // Dapatkan email baru dari generator.email
    const domainList = await getEmailRandom();
    const domain = domainList[Math.floor(Math.random() * domainList.length)];
    const name = faker.internet.username().toLowerCase().replace(/[^a-z0-9]/g, '');
    const email = `${name}@${domain}`;
    console.log(`Menggunakan email: ${email}`);

    // Mulai proses OTP dengan email yang dihasilkan
    await startOTPProcess(email);
}

// Jalankan fungsi utama
main();