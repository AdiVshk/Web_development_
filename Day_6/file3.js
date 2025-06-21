const axios = require('axios');

async function postData() {
  const response = await axios.put(
    'https://httpdump.app/dumps/69a771ef-3e1a-4aa8-920c-539b6f57de67/?a=10&b=10',
    {
      username: 'aditya',
      password: 'sadfadsf',
    },
    {
      headers: {
        authorization: 'Bearer 123',
      },
    }
  );

  console.log(response.data);
}

postData();
