
import { expect, test } from "@playwright/test";

test.describe("Whole Test", async () => {

    test.skip("Multi-Window & Tab", async ({ context, page }) => {

        await page.goto("https://www.servicenow.com");

        let [allPages] = await Promise.all([
            page.waitForEvent('popup'),
            await page.locator('//a[@class="social linkedin"]').click()
        ]);

        await allPages.waitForLoadState('networkidle');
        let allTabs = allPages.context().pages();
        let linkedinPage;

        allTabs.forEach((tab) => {
            if (tab.url() === 'https://www.linkedin.com/company/servicenow') {
                linkedinPage = tab
            }
        })

        expect(await linkedinPage.title()).toContain('ServiceNow | LinkedIn')
    })

    test.skip("Frames", async ({ page, context }) => {

        // frames
        // frame - ?. fill method
        // frameLocator - locator & fill method

        // driver.switchTo.frame
        // driver.switchTo.defaultContent

        await page.goto('https://letcode.in/frame');

        let allFrames = page.frames();
        let oneFrame = page.frame();

        await oneFrame?.fill('', '');

        await page.waitForLoadState('networkidle')
        let singleFrame = page.frameLocator("//iframe[@id='firstFr']");
        await singleFrame.locator('//input[@name="fname"]').fill('alphas')


    })

    test.skip('alert', async ({ page, context }) => {

        // accept
        // dismiss
        // message  // getText
        //          // sendKeys

        await page.goto('https://letcode.in/alert');
        await page.waitForLoadState('networkidle')

        page.on('dialog', async (alert) => {
            alert.accept();
            let text = alert.message();
            console.log(text)
        })

        await page.locator('//button[@id="accept"]').click();
        await page.waitForLoadState('networkidle')

    })


})
