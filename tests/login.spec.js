const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');

test('Valid Login', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.navigate();

  const url = await homePage.getPageUrl();
  console.log('URL is:', url);

  await expect(page).toHaveTitle('Regus Online Account');

  await homePage.clickLoginOrRegister();
});
