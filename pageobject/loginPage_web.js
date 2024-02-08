const { url } = require("inspector");

class LoginPage {

    constructor(page)
    {
        this.page = page;
        this.signInbutton= page.locator("[value='Login']");
        this.userName = page.locator("#userEmail");
        this.password = page.locator("#userPassword");
    
    }
    
    async goTo(url)
    {
        await this.page.goto(url);
    }
    
    async validLogin(username,password)
    {
        await  this.userName.type(username);
        await this.password.type(password);
        await this.signInbutton.click();
        await this.page.waitForLoadState('networkidle');
    
    }
    
    }
    module.exports = {LoginPage};