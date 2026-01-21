const { decrypt } = require('../utils/decrypt');
class LoginPage {
    constructor(page) {
      this.page = page;
  
      // Page locators
      this.loginOrRegisterButton = page.getByRole('button', {
        name: 'Login or register',
      });

      this.googleButton= page.getByRole('button', { name: 'Google' })

      this.selectEmail= page.getByText('giitanjalim@gmail.com')

      this.enterEmail= page.getByRole('textbox', { name: /Email or phone/i })

      this.nextButton= page.getByText('Next', { exact: true });

      this.passwordInput = page.locator('input[type="password"]');
    }
  
    // Page actions
    async navigate() {
      await this.page.goto('/');
    }
  
    async getPageUrl() {
      return this.page.url();
    }
  
    async verifyTitle() {
      await this.page.waitForLoadState('domcontentloaded');
    }
  
    async clickLoginOrRegister() {
      await this.loginOrRegisterButton.click();
    }

    async clickGoogleBtn() {
      await this.googleButton.click();
    }

    async enterEmailId() {
      await this.enterEmail.type(process.env.TEST_EMAIL)
    }

    async clickNextBtn() {
      await this.nextButton.click();
    }

    async enterPassword() {
      const password = decrypt(process.env.TEST_PASSWORD_ENC);
      await this.passwordInput.fill(password);
    }
  }
  
  module.exports = { LoginPage };
  