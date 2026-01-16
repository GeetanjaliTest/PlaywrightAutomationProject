const { test, expect } = require('@playwright/test');

test.only('Valid Login', async ({ page }) => {
  await page.goto('/');

  const url = page.url();
  console.log('URL is:', url);

  await expect(page).toHaveTitle('Regus Online Account');

  await page.getByRole('button', { name: 'Login or register' }).click();

});
