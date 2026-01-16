class LoginPage {
    constructor(page) {
      this.page = page;
  
      // Page locators
      this.loginOrRegisterButton = page.getByRole('button', {
        name: 'Login or register',
      });

      this.googleButton= page.getByRole('button', { name: 'Google' })

      this.selectEmail= page.getByText('giitanjalim@gmail.com')
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

    async clickSelectEmail() {
      await this.selectEmail.click();
    }

  }
  
  module.exports = { LoginPage };
  