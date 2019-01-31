const cheerio = require('cheerio');
const rp = require('request-promise');

class AliexpressScrape {
    constructor(url) {
        this.url = url
    }

    async runScrape(url) {
        const data = await rp(url)
        const $ = cheerio.load(data)
        const itemRawData = {
            name: $('[itemprop="name"]').text(),
            url: $('meta[itemprop="url"]').attr('content'),
            price: $('[itemprop="price"]').text() !== '' ? $('[itemprop = "price"]').text() : $('[itemprop = "lowPrice"]').text(),
            currency: $("*[itemprop = 'priceCurrency']").attr('content'),
            image: $("meta[property='og:image']").attr("content")
        }
        return itemRawData
    }
}

// runScrape(url) {
//     console.log('tomer ya king' + url)
//     rp(url, function (err, res, html) {
//         if (!err) {
//             const $ = cheerio.load(html);
//             const itemRawData = {
//                 name: $('[itemprop="name"]').text(),
//                 url: $('meta[itemprop="url"]').attr('content'),
//                 price: $('[itemprop="price"]').text() !== '' ? $('[itemprop = "price"]').text() : $('[itemprop = "lowPrice"]').text(),
//                 currency: $("*[itemprop = 'priceCurrency']").attr('content'),
//                 image: $("meta[property='og:image']").attr("content")
//             }
//             // console.log(itemRawData)
//             return itemRawData
//         }
//     })
// }



// let dealURL = 'https://www.aliexpress.com/item/Fashion-seller-Old-World-Map-mouse-pad-2016-new-large-pad-to-mouse-notbook-computer-mousepad/32727458482.html'
// const runScrape = function (url) {
//     console.log('scrape working' + url)
// await request(url, function (err, res, html) {
//     if (!err) {
//         const $ = cheerio.load(html);
//         const itemRawData = {
//             name: $('[itemprop="name"]').text(),
//             url: $('meta[itemprop="url"]').attr('content'),
//             price: $('[itemprop="price"]').text() !== '' ? $('[itemprop = "price"]').text() : $('[itemprop = "lowPrice"]').text(),
//             currency: $("*[itemprop = 'priceCurrency']").attr('content'),
//             image: $("meta[property='og:image']").attr("content")
//         }
//         return
//     }
// })
// }

const aliexpress = new AliexpressScrape
module.exports = aliexpress