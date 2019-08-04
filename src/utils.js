const GetProperty = async (element, property) => {
  return await (await element.getProperty(property)).jsonValue()
}

module.exports = {
  GetProperty
}