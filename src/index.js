const request = require("request");
const cheerio = require('cheerio');

/** Get a random poem 
 * from https://w0.poemhunter.com/members/random-poem/ 
 * */
const getRandomPoem = async () => {
  const uri = 'https://w0.poemhunter.com/members/random-poem/';
  const titleSelector = '#content > div.content-block.bordered.random-poem > div > div.poem > h2';
  const contentSelector = '#content > div.content-block.bordered.random-poem > div > div.poem > p';

  return new Promise((resolve, reject) => {
    request({
        uri
      },
      async (error, response, body) => {
        if (error) reject(error);
        const $ = await cheerio.load(body)

        const title = await $(titleSelector).text()
        const content = await $(contentSelector).text()

        resolve({
          title,
          content
        })
      }
    );
  })
};

module.exports = {
  getRandomPoem
};