require('dotenv').config();

const STOCKX_API_TOKEN = process.env.STOCKX_API_TOKEN;
const STOCKX_JWT = process.env.STOCKX_JWT;

module.exports = {
  STOCKX_API_TOKEN,
  STOCKX_JWT,
}
