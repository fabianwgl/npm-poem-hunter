const http = require("http");

const GetProperty = async (element, property) => {
  return await (await element.getProperty(property)).jsonValue()
}

const httpRequest = new Promise((resolve, reject) => {

})

module.exports = {
  GetProperty
}