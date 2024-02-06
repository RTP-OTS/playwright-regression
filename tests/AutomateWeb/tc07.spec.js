const { test,expect } = require('@playwright/test');
const { LoginPage } = require('../../pageobject/loginPage_web')
const JSONdata = require('../../page/datatest.json');
const { DashboardPage } = require('../../pageobject/dashboard_web');

test ('test app' , async ({page})=> {
    const loginPage = new LoginPage(page);
    await loginPage.goTo()
    await loginPage.validLogin(JSONdata.user.username,JSONdata.user.password)
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.searchProductAddCart(JSONdata.productName)
    await dashboardPage.navigateToCart();
});