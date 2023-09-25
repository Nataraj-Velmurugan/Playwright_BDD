import {test, expect} from "@playwright/test";

// test.describe("All tests", () => {

//     test.beforeEach("", async ({page}) => {

//         await page.goto("https://playwright.dev/")

//     })
// })

test.only("auto suggest select", async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://google.com");

    await page.locator("//textarea[@title='Search']").fill("india fjshjdjfsd djfjdfjs fjdnfjsfjsd fsfjsdbnjsdjsbkjsdb", {delay: 100})


    page.getByRole("")
    await page.pause();
})