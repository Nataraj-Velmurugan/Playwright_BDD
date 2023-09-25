import {test, expect} from "@playwright/test";


test("Child Window, new tab", async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    let pageTitle = await page.title();

    let interviewMaterialLink = page.getByRole('link', {name: "Free Access to InterviewQues/ResumeAssistance/Material"})

    console.log("page tile:   " + pageTitle);
    
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        interviewMaterialLink.click()
    ]);

    let newPageTitle = await newPage.title();

    console.log("newPageTitle" + newPageTitle)

})