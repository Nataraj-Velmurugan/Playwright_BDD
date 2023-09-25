class Page {

    constructor(page)
    {
        this.page = page;
    }
    
    async goTo()
    {
        await this.page.goto("https://www.caratlane.com/");
    }

    
    }
    module.exports = {Page};