const {test , expect} = require('@playwright/test')

test ('Verify shop' , async ({page}) =>{

    const username = 'anshika@gmail.com';
    const password = 'Iamking@000';
    const productName = "ADIDAS ORIGINAL";
    const product = page.locator(".card-body");

    //step1
    await page.goto('https://rahulshettyacademy.com/client/');
    await page.locator("#userEmail").fill(username);
    await page.locator("#userPassword").fill(password);
    await page.locator("#login").click();

    //step2
    await page.waitForLoadState('networkidle');
    const titileItem = await page.locator(".card-body b").allTextContents();
    console.log(titileItem);
    expect(titileItem).toContain(productName);

    const count = await product.count();
    for(let i=0; i < count; ++i)
    {
        if(await product.nth(i).locator("b").textContent() === productName)
    {
            await product.nth(i).getByText("Add To Cart").click();
            break;
        }
    }

});