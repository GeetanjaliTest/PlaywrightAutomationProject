const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('Valid Login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();

  const url = await loginPage.getPageUrl();
  console.log('URL is:', url);

  await expect(page).toHaveTitle('Regus Online Account');

  await loginPage.clickLoginOrRegister();

  await expect(page).toHaveTitle('IWG Authentication');

  await loginPage.clickGoogleBtn();

  await expect(page).toHaveTitle('Sign in - Google Accounts');

  await loginPage.clickSelectEmail();
});
