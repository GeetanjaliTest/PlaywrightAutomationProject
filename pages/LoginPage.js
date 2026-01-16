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

  }
  
  module.exports = { LoginPage };
  