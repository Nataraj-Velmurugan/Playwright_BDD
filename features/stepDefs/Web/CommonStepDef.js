const { When, Then, Given } = require('@cucumber/cucumber')
const { expect } = require('@playwright/test');
const playwright = require('@playwright/test');

Given('I load portal in a new browser', { timeout: 100 * 1000 }, async function () {
    
    const Page = this.poManager.getNewPage();
    await Page.goTo();
    
});

