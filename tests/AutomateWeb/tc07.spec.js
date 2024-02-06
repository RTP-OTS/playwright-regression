const {test,expect} = require('@playwright/test');
const {LoginPage} = require('../../pageobject/LoginPage');
const JSONdata = require('../../page/config.json')

test ('test app' , async ({page})=> {
    const loginPage = new LoginPage(page);
    await loginPage.goTo()
    await loginPage.validLogin(JSONdata.user.username,
        JSONdata.user.password)
});