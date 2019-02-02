const cheerio = require('cheerio');
const rp = require('request-promise');

class AliexpressScrape {

    async runScrape(url) {
        const data = await rp(url)
        const $ = cheerio.load(data)
        const itemRawData = {
            name: $('[itemprop="name"]').text(),
            url: $('meta[itemprop="url"]').attr('content'),
            price: $('[itemprop="price"]').text() !== '' ? $('[itemprop = "price"]').text() : $('[itemprop = "lowPrice"]').text(),
            currency: $('*[itemprop = "priceCurrency"]').attr('content'),
            image: $('meta[property="og:image"]').attr("content")
        }
        return itemRawData
    }
}


const aliexpress = new AliexpressScrape
module.exports = aliexpress