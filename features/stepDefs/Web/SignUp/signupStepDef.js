const { When, Then, Given } = require('@cucumber/cucumber')
const { expect } = require('@playwright/test');
const playwright = require('@playwright/test');



Then('I enter following details in sign up component', async function () {
    
    const Page = this.poManager.getSignUpPage();
    await Page.signUp();

});