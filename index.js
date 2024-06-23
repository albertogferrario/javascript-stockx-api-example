const StockxApi = require("@albertogferrario/stockx-api");
const {STOCKX_API_TOKEN, STOCKX_JWT} = require("./config");

const stockxApi = new StockxApi(STOCKX_API_TOKEN, STOCKX_JWT);
const stockxProductSlug = 'adidas-campus-00s-green-cloud-white-womens';
const stockxProductId = '3e3d3b6f-46f4-4c1c-8cb8-cd4f62d5c10a';
const stockxVariantId = '1c5bd5d9-fbc1-4f60-a063-a797ccb7ec32';

async function getVariants() {
    console.log('==================================');
    console.log('getVariants');
    console.log('==================================');
    console.log(await stockxApi.catalog.getVariants(stockxProductSlug));
}

async function getVariantMarketData() {
    console.log('==================================');
    console.log('getVariantMarketData');
    console.log('==================================');
    console.log(await stockxApi.catalog.getVariantMarketData(stockxProductId, stockxVariantId, 'EUR'));
}

async function main() {
    await getVariants();
    await getVariantMarketData();
}

main();
