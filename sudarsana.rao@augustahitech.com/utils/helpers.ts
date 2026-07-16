const { expect } = require('@playwright/test');

async function safeClick(page, selector) {
  await page.waitForSelector(selector);
  await page.click(selector);
}

async function safeFill(page, selector, value) {
  await page.waitForSelector(selector);
  await page.fill(selector, value);
}

async function waitForResponse(page, url) {
  const response = await page.waitForResponse(url);
  return response;
}

module.exports = {
  safeClick,
  safeFill,
  waitForResponse
};
