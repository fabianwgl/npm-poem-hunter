const puppeteer = require('puppeteer');
const {
  GetProperty
} = require('./utils')

/** Get a random poem 
 * from https://w0.poemhunter.com/members/random-poem/ 
 * */
const getRandomPoem = async () => {
  const url = 'https://w0.poemhunter.com/members/random-poem/';
  const titleSelector = '#content > div.content-block.bordered.random-poem > div > div.poem > h2';
  const contentSelector = '#content > div.content-block.bordered.random-poem > div > div.poem > p';

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url);

  let title = await GetProperty((await page.$$(titleSelector, h1 => h1))[0], 'innerText');
  let content = await GetProperty((await page.$$(contentSelector, p => p))[0], 'innerText');

  await browser.close();

  return {
    title,
    content
  }
};

module.exports = {
  getRandomPoem
};