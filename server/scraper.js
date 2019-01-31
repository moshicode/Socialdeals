// const request = require('request');
// const cheerio = require('cheerio');

// class Scraper {
//     constructor(url) {
//         this.url = url
//     }

//     getScrapeData(url) {
//         request(url, function (err, res, html) {
//             if (!err) {
//                 const $ = cheerio.load(html);
//                 let itemRawData = {
//                     name: $('[itemprop="name"]').text(),
//                     url: $('meta[itemprop="url"]').attr('content'),
//                     price: $('[itemprop="price"]').text() !== '' ? $('[itemprop = "price"]').text() : $('[itemprop = "lowPrice"]').text(),
//                     currency: $("*[itemprop = 'priceCurrency']").attr('content'),
//                     image: $("meta[property='og:image']").attr("content")
//                 }
//                 console.log(itemRawData)
//             }
//         })
//     }

// }

// const zoo = new Scraper
// zoo.getScrapeData('https://www.aliexpress.com/item/HOT-PVIVLIS-LED-Anion-Shower-SPA-Shower-Head-Pressurized-Water-Saving-Temperature-Control-Colorful-Handheld-Big/32791844448.html')


// // zoo.addAnimal(cat) // prints "Added Puss to the zoo"
// // zoo.showAnimals() // prints "Puss"// class Scraper {
// //     constructor(url) {
// //         this.url = url
// //     }

// //     getScrapeData(url) = {
// //     request(url, function (err, res, html) {
// //         if (!err) {
// //             const $ = cheerio.load(html);
// //             const itemRawData = {
// //                 name: $('[itemprop="name"]').text(),
// //                 url: $('meta[itemprop="url"]').attr('content'),
// //                 price: $('[itemprop="price"]').text() !== '' ? $('[itemprop = "price"]').text() : $('[itemprop = "lowPrice"]').text(),
// //                 currency: $("*[itemprop = 'priceCurrency']").attr('content'),
// //                 image: $("meta[property='og:image']").attr("content")
// //             }
// //             console.log(itemRawData)
// //         }
// //     })
// // }
// // }

// // const cat = new Scraper
// // cat.getScrapeData('https://www.aliexpress.com/item/Fashion-seller-Old-World-Map-mouse-pad-2016-new-large-pad-to-mouse-notbook-computer-mousepad/32727458482.html')

// module.exports = Scraper