const Manager = require('./scrapeManager');

class scrapeHelpers {
    async checkLegitimateUrl(url) {
        let LegitimateSites = (Object.keys(Manager))
        for (let site of LegitimateSites) {
            if (url.includes(site)) {
                return await Manager[site].runScrape(url)
            } else {
                console.log('not found ' + site)
            }
        }
    }
}

let Helpers = new scrapeHelpers
module.exports = Helpers
