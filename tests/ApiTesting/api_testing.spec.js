const {test,expect,request} = require('@playwright/test');
const {apiUtils} =require('../utils/apiutils')
const loginPayLoad = { userEmail: "anshika@gmail.com", userPassword: "Iamking@000" };
const orderPayLoad = { orders: [{ country: "India", productOrderedId: "6262e95ae26b7e1a10e89bf0" }] };

let token;
let response;
test.beforeAll( async()=>
{
    const apiContext = await request.newContext();
    const apiUtils = new apiUtils(apiContext,loginPayLoad);
    response = await apiUtils.createOrder(orderPayLoad);

test.beforeEach(()=>{

})

});
