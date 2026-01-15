const{test, expect}= require('@playwright/test')

test.only('Verify Application Title', async function({page}){
    await page.goto('https://www.myregus.com');

    const url= await page.url()

    console.log("Title is ", url)

    const title= await page.title()

    await expect(page).toHaveTitle("Regus Online Account")
}); 