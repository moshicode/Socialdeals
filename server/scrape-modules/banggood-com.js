const cheerio = require('cheerio');
const rp = require('request-promise');

class BanggoodScrape {

    async runScrape(url) {
        const data = await rp(url)
        const $ = cheerio.load(data)
        const itemRawData = {
            name: $('meta[property="og:title"]').attr('content'),
            url: $('meta[itemprop="url"]').attr('content'),
            price: $('[itemprop="price"]').attr('content'),
            currency: $('*[itemprop = "priceCurrency"]').attr('content'),
            image: $('meta[property="og:image"]').attr("content")
        }
        return itemRawData
    }
}


const banggood = new BanggoodScrape
module.exports = banggood