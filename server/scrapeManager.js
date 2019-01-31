const aliexpress = require('./scrape-modules/aliexpress-com');
const ebay = require('./scrape-modules/ebay-com');
const amazon = require('./scrape-modules/amazon-com');

module.exports = {
    "aliexpress": aliexpress,
    "ebay": ebay,
    "amazon": amazon,
};


// module.exports = {
//     aliexpress: getScrape
// }

// // class Url {
// //     constructor(url) {
// //         this.url = url
// //     }

// //     extractUrl() {
// //         let sourceString = url.replace('http://', '').replace('https://', '').replace('www.', '').split(/[/?#]/)[0];
// //         console.log(extractUrl)
// //     }
// // }

// // const cat = new Url("https://www.aliexpress.com/item/Fashion-seller-Old-World-Map-mouse-pad-2016-new-large-pad-to-mouse-notbook-computer-mousepad/32727458482.html")

// // module.exports = Url
