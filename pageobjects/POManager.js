const { Page } = require('./Page');
const { LoginPage } = require('./LoginPage');
const { SignUpPage } = require('./SignUpPage');

class POManager {
    constructor(page) {
        this.page = page;
        this.Page = new Page(this.page)
        this.loginPage = new LoginPage(this.page);
        this.signupPage = new SignUpPage(this.page)

    }

    getNewPage() {
        return this.Page
    }

    getLoginPage() {
        return this.loginPage;
    }

    getSignUpPage() {
        return this.signupPage;
    }


}
module.exports = { POManager };