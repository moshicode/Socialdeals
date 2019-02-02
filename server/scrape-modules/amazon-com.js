const cheerio = require('cheerio');
const rp = require('request-promise');

class AmazonScrape {
    async runScrape(url) {
        const data = await rp(url)
        const $ = cheerio.load(data)
        const itemRawData = {
            name: $('#cerberus-data-metrics'),
            // url: $('meta[itemprop="url"]').attr('content'),
            // price: $('#priceblock_ourprice').text()
            // currency: $("*[itemprop = 'priceCurrency']").attr('content'),
            // image: $("meta[property='og:image']").attr("content")
        }
        return itemRawData
    }
}

const amazon = new AmazonScrape
module.exports = amazon