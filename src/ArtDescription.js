const puppeteer = require("puppeteer")
const $ = require("cheerio")

function getDescription(url) {
  puppeteer
  .launch()
  .then((browser) => {
    return browser.newPage()
  })
  .then((page) => {
    return page.goto(url).then(() => {
      return page.content()
    })
  })
  .then((html) => {
    $('will be here later', html).each(function () {
      console.log($(this).text())
    })
  })
  .catch(err => console.error("An error occured: ", err)) 
}