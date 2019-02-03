const cheerio = require('cheerio');
const rp = require('request-promise');

class AsosScrape {

    async runScrape(url) {
        console.log(' working?')
        const data = await rp(url)
        const $ = cheerio.load(data)
        const itemRawData = {
            // name: $('span[itemprop="name"]').text(),
            url: $('meta[itemprop="url"]').attr('content'),
            // price: $('span[itemprop="price"]').text(),
            // currency: $('*[itemprop = "priceCurrency"]').attr('content'),
            // image: $('meta[property="og:image"]').attr("content")
        }
        return itemRawData
    }
}


const asos = new AsosScrape
module.exports = asos