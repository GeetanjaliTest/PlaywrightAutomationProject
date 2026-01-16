class HomePage {
    constructor(page) {
      this.page = page;
  
      // Page locators
      this.loginOrRegisterButton = page.getByRole('button', {
        name: 'Login or register',
      });
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
  }
  
  module.exports = { HomePage };
  