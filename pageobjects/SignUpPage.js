class SignUpPage {
    constructor(page) {

        this.page = page;
        this.userProfileIcon = page.locator('//div[@type="USER_PROFILE"]');
        this.signupButton = page.locator("//div[@type='USER_PROFILE']/div/div/div/a[text()='Sign Up']");
        this.mobileNumberInput = page.locator("//input[@name='mobile']");
        this.emailInput = page.locator("//input[@name='email']");
        this.firstNameInput = page.locator("//input[@name='firstName']");
        this.lastNameInput = page.locator("//input[@name='lastName']");
        this.newPasswordInput = page.locator("//input[@name='newPassword']");
        this.confirmPasswordInput = page.locator("//input[@name='confirmPassword']");
        this.whatsAppCheckBox = page.locator("//input[@id='whatsappupdate']");
        this.signupFinalButton = page.locator("//button[@content='SIGN ME UP']")

    
    }

    async signUp() {

        await this.userProfileIcon.hover();
        await this.signupButton.click();
        await this.mobileNumberInput.fill("9876543210");
        await this.emailInput.fill("alpha@gmail.com");
        await this.firstNameInput.fill("fsdfg");
        await this.lastNameInput.fill("sdfsd");
        await this.newPasswordInput.fill("Abcde123$");
        await this.confirmPasswordInput.fill("Abcde123$");
        await this.whatsAppCheckBox.check();
        await this.signupFinalButton.click();

    }


}

module.exports = {SignUpPage};