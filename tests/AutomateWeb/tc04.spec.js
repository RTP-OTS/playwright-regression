const {test , expect} = require('@playwright/test')

test ('Verify - shop' , async ({page}) =>{

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
    for(let i=0; i < count; ++i){
        const productText = await product.nth(i).locator("b").textContent()
        if(productText === productName){
            await product.nth(i).getByText("Add To Cart").click();
            break;
        }
    }

    //step3
    await page.locator('[routerlink="/dashboard/cart"]').click();
    const itemIncart = await page.locator(".cartSection h3")
    console.log(await itemIncart.textContent());
    await expect(itemIncart).toContainText(productName)

    await page.locator("div li").first().waitFor();
    const bool = await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
    expect(bool).toBeTruthy();
    await page.locator("text=Checkout").click();
  
    await page.locator("[placeholder*='Country']").type("ind");
  
    const dropdown = page.locator(".ta-results");
    await dropdown.waitFor();
    const optionsCount = await dropdown.locator("button").count();
    for (let i = 0; i < optionsCount; ++i) {
       const text = await dropdown.locator("button").nth(i).textContent();
       if (text === " India") {
          await dropdown.locator("button").nth(i).click();
          break;
       }
    }
  
    expect(page.locator(".user__name [type='text']").first()).toHaveText(username);
    await page.locator(".action__submit").click();
    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderId);
  
    await page.locator("button[routerlink*='myorders']").click();
    await page.locator("tbody").waitFor();
    const rows = await page.locator("tbody tr");
    for (let i = 0; i < await rows.count(); ++i) {
       const rowOrderId = await rows.nth(i).locator("th").textContent();
       if (orderId.includes(rowOrderId)) {
          await rows.nth(i).locator("button").first().click();
          break;
       }
    }
    const orderIdDetails = await page.locator(".col-text").textContent();
    expect(orderId.includes(orderIdDetails)).toBeTruthy();
  
 });
