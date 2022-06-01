const request = require("request-promise")
const cheerio = require("cheerio")
const fs = require("fs")
const json2csv = require("json2csv").Parser;

const sites = [];

(async ()=>{
    let siteData = []
    const response = await request({
        uri: sites, 
        headers:{

        }, 
        json: true
    });
    
    let $ = cheerio.load(response)
    let title
    let pageLink
    let description

    siteData.push({
        title, pageLink,description
    });

    const json2cp = new json2csv()
    const csv = json2cp.parse(siteData)
    fs.writeFileSync("./knewsfeedVanilla", csv, "utf-8")
}
)();