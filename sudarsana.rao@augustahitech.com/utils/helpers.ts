const { expect } = require('@playwright/test');

async function safeFill(page, selector, value) {
  await page.waitForSelector(selector);
  await page.fill(selector, value);
}

async function safeClick(page, selector) {
  await page.waitForSelector(selector);
  await page.click(selector);
}

async function waitForResponse(page, url) {
  return page.waitForResponse(url);
}

module.exports = {
  safeFill,
  safeClick,
  waitForResponse
};
