const aliexpress = require('./scrape-modules/aliexpress-com');
const ebay = require('./scrape-modules/ebay-com');
const amazon = require('./scrape-modules/amazon-com');
const banggood = require('./scrape-modules/banggood-com');
const asos = require('./scrape-modules/asos-com');



module.exports = {
    "aliexpress": aliexpress,
    "ebay": ebay,
    "amazon": amazon,
    // "geekbuying": geekbuying,
    "banggood": banggood,
    // "gearbest": gearbest,
    "asos": asos
    // "joybuy": joybuy
    // "other": notFound

};
