const accounts = [
    // muhfiiqih+21@gmail.com
    {
        AUTH_TOKEN : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzliYTdjNjdjYTIxOTgzNGFkMjJmYjAiLCJwdWJsaWNBZGRyZXNzIjoiRDZ0ZUZxeTVFWDhzQUVCY3VuQlZ0VmpkdUpBRFNhUFZQN0NoQlNEOFdOazgiLCJ3YWxsZXRUeXBlIjoic29sYW5hIiwiaWF0IjoxNzM4NzU0NDA1LCJleHAiOjE3NzAzMTIwMDV9.fTSK4yD-HB8VoLJLj7n4gJZL6BKY-C1TA4uYB7Kc_K4'
    },
    // muhfiiqih+22@gmail.com
    {
        AUTH_TOKEN : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzliYTdlYjdjYTIxOTgzNGFkMjM5NzEiLCJwdWJsaWNBZGRyZXNzIjoiQ29FSmVrcEplU1I4Sm1pdlIyd0pLcWE5SFdMcEUzS1N4QzY4UHo3d2V5elEiLCJ3YWxsZXRUeXBlIjoic29sYW5hIiwiaWF0IjoxNzM4NzU0NTMxLCJleHAiOjE3NzAzMTIxMzF9.xCDyE-UcMgmOjQNC01GkDMTgA9jiBPQSG1-gqJiYpkQ'
    },
    // muhfiiqih+23@gmail.com
    {
        AUTH_TOKEN : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzliYTgxMzdjYTIxOTgzNGFkMjQ0YWMiLCJwdWJsaWNBZGRyZXNzIjoiQ25hMWNRZ0trRXQyd2F2Mlg3MlFudjR2b0tidW9DNEJDcFpZUzRVMzQ4TTgiLCJ3YWxsZXRUeXBlIjoic29sYW5hIiwiaWF0IjoxNzM4NzU0NjM1LCJleHAiOjE3NzAzMTIyMzV9.EATon_E1_HhBieUb1kyKy0BFaFn8c537b-qUz7VE-XA'
    },
    // muhfiiqih+24@gmail.com
    {
        AUTH_TOKEN : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzliYTg0MDdjYTIxOTgzNGFkMjUxOTUiLCJwdWJsaWNBZGRyZXNzIjoiMmhMWVd2UEZnUG54c0VkZEdIMWEzWmdXMVZDZmsxcVNycXFzZ2lUTWpWbUciLCJ3YWxsZXRUeXBlIjoic29sYW5hIiwiaWF0IjoxNzM4NzU0NzM5LCJleHAiOjE3NzAzMTIzMzl9._cf1LXFa7Q1tzk4sAfyE2mmiKuwYAQ-MzcJzaFkO6Ig'
    },
    // muhfiiqih+25@gmail.com
    {
        AUTH_TOKEN : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzliYTg2ODdjYTIxOTgzNGFkMjc1N2YiLCJwdWJsaWNBZGRyZXNzIjoiR0JLRGs1TGdhaDkzSE1lNWRuV0JQaGVLUWlmckxzWXJtZU1uMnlNMXNucyIsIndhbGxldFR5cGUiOiJzb2xhbmEiLCJpYXQiOjE3MzgyNTQ0NDMsImV4cCI6MTc2OTgxMjA0M30.1yYb4wOesgZw5YmUR1sQl3QiT8o9O73S5CbireLdaq8'
    },
    // muhfiiqih+26@gmail.com
    {
        AUTH_TOKEN : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzliYTg5NjdjYTIxOTgzNGFkMjgzNTUiLCJwdWJsaWNBZGRyZXNzIjoiM2JyZHJrSFpEMUNCWTF5SnZLUEhReE5CZWc4UnBzNFJnQkVxMkFYQnQ2M0ciLCJ3YWxsZXRUeXBlIjoic29sYW5hIiwiaWF0IjoxNzM4MjU0NDg2LCJleHAiOjE3Njk4MTIwODZ9.iCtkgoxGAVw_2AG33N4ZGtCL40hSxWXBUUIycWdl-q4'
    },
    // muhfiiqih+27@gmail.com
    {
        AUTH_TOKEN : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzliYThiOTdjYTIxOTgzNGFkMjhiYTUiLCJwdWJsaWNBZGRyZXNzIjoiSEtyWDhvY1c3aDcxa1RHSlpWRU1Hb3pjSDM4NG5OYkVTd1hjZ1Z1dW9GdDUiLCJ3YWxsZXRUeXBlIjoic29sYW5hIiwiaWF0IjoxNzM4MjU0NTIxLCJleHAiOjE3Njk4MTIxMjF9.G96rkwafPNI9VDrClHSARhFPlYfo2tkpn9Y7WgED0rU'
    },
    // muhfiiqih+28@gmail.com
    {
        AUTH_TOKEN : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzliYThkYjdjYTIxOTgzNGFkMjk0ODgiLCJwdWJsaWNBZGRyZXNzIjoiRW1UWUd0cTFpalRhVThKRDljc2NwN21rZFVOV3JCY2VVV29NZ2Q1Z3dpMjQiLCJ3YWxsZXRUeXBlIjoic29sYW5hIiwiaWF0IjoxNzM4MjU0NTU2LCJleHAiOjE3Njk4MTIxNTZ9.3W7b6fgpAyvhoUfC_G7EFEwZWoYcysFJ_XnhXdio7qg'
    },
    // muhfiiqih+29@gmail.com
    {
        AUTH_TOKEN : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzliYTkwMDdjYTIxOTgzNGFkMjlmNTkiLCJwdWJsaWNBZGRyZXNzIjoiN2JSQkNxQVRVU2gzeG5Wd0VKTlBFUXZmRFhoOGVGQWVrWFNtWmZjWjFDVUgiLCJ3YWxsZXRUeXBlIjoic29sYW5hIiwiaWF0IjoxNzM4MjU0NTkzLCJleHAiOjE3Njk4MTIxOTN9.-zWvm1fw9IO4wHb0vKoRJICN9qNIJwWA5HIdSRVGf_g'
    },
    // muhfiiqih+30@gmail.com
    {
        AUTH_TOKEN : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzliYTkyNzdjYTIxOTgzNGFkMmE5ZGUiLCJwdWJsaWNBZGRyZXNzIjoiQ0xaa1g0NHFZb3ZmaVdVczRTVHAxNURZMTc5aWJ3aXVIM0NDYVlOVG9KTGUiLCJ3YWxsZXRUeXBlIjoic29sYW5hIiwiaWF0IjoxNzM4MjU0NjMyLCJleHAiOjE3Njk4MTIyMzJ9.bK4PZyr3jNSt2BWOYYuZ2P78s1hBMB-8Vsc_PX1YE2s'
    }
    ];

const USER_AGENTS = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Edge/537.36",
"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Edge/537.36",
"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Edge/120.0.0.0",
"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2.1 Safari/605.1.15",
"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:133.0) Gecko/20100101 Firefox/133.",
"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.3",
"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 OPR/114.0.0.",
"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.3",
"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.3",
"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 AtContent/95.5.5462.5",
];

/**
* Returns a random User-Agent string from the USER_AGENTS array.
* @returns {string} A random User-Agent string.
* @throws {Error} If the USER_AGENTS array is empty.
*/
function getRandomUserAgent() {
if (USER_AGENTS.length === 0) {
    throw new Error('User agents list is empty.');
}
const index = Math.floor(Math.random() * USER_AGENTS.length);
return USER_AGENTS[index];
}

const proxyFile = 'proxy.txt'; // Path to your proxy.txt file

export  {
accounts,
getRandomUserAgent,
proxyFile,
};
