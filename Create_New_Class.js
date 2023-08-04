const {Builder, By, Key, until} = require('selenium-webdriver');
const assert = require("assert");
//Describe Block
describe("Login as User and Created New Class ", function()
{
  let driver

  before(async function(){
    driver = await new Builder().forBrowser('firefox').build(); //launching the browser
    await driver.get("http://edtest70.edcite-dev.com/usr/signin.html"); // enter url
    await driver.manage().setTimeouts({ implicit: 30000});
  })
  after(async function(){
    await driver.quit();
  })

  it("Create New Class ",async function example() {

    // login as teacher
         // await driver.get("http://edtest70.edcite-dev.com/usr/signin.html"); // enter url
          await driver.findElement(By.id("userid")).sendKeys("praveen1476"); // enter userName
          await driver.findElement(By.id("password")).sendKeys("praveen"); // enter password
          await driver.findElement(By.id("loginBtn")).click(); // Click on login Button
          //click on create new class
          await driver.findElement(By.xpath('//button[@class="btn eg"]')).click();
          //enter class name
          await driver.findElement(By.id('fhClassName')).sendKeys("July14"); 
          //enter create
          await driver.findElement(By.xpath('//button[@class="btn eg btn btn-default"]')).click(); 
          await driver.sleep(3000);
          // click on user name
          await driver.findElement(By.xpath('//span[text()="praveen"]')).click();
          // click on logout
          await driver.findElement(By.xpath('//a[text()="Logout"]')).click(); 
         // await driver.quit();
  });
});
