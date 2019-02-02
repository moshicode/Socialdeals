const cheerio = require('cheerio');
const rp = require('request-promise');

class ebayScrape {
    async runScrape(url) {
        const data = await rp(url)
        const $ = cheerio.load(data)

        const itemRawData = {
            name: $('meta[name="twitter:title"]').attr('content'),
            url: $('meta[property="og:url"]').attr("content"),
            price: $('span[itemprop="price"]').attr('content'),
            currency: $('*[itemprop = "priceCurrency"]').attr('content'),
            image: $('meta[property="og:image"]').attr("content"),
        }
        return itemRawData
    }
}

const ebay = new ebayScrape
module.exports = ebay