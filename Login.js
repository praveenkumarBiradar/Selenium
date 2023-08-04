const {Builder, By, Key, until} = require('selenium-webdriver');
var assert = require('assert');
//Describe Block
describe("Login as a user", function()
{
  let driver

  before(async function(){
     driver = await new Builder().forBrowser('firefox').build(); //  Browser Launch
     await driver.manage().setTimeouts({ implicit: 30000});
     await driver.get("http://edtest70.edcite-dev.com/usr/signin.html"); // Login as a teacher
  })
  after(async function(){
    await driver.quit();  // closing the browser tab
  })
  it(" Successfully Login ",async function example() {
   // let driver = await new Builder().forBrowser('firefox').build(); //  Browser Launch
    //await driver.manage().setTimeouts({ implicit: 30000});
   // await driver.get("http://edtest70.edcite-dev.com/usr/signin.html"); // Login as a teacher
    await driver.findElement(By.id("userid")).sendKeys("praveen1476");
    await driver.findElement(By.id("password")).sendKeys("praveen");
    await driver.findElement(By.id("loginBtn")).click();
    await driver.sleep(10000);
    var ActualTitle = await driver.getTitle(); // Get the page tittle
    assert.equal("Teacher Home | Edcite", ActualTitle);       
    await driver.findElement(By.xpath('//span[@class="user-name"]')).click(); // Click on User-name
    await driver.findElement(By.xpath('//a[text()="Logout"]')).click();  // click on logout 
        //  await driver.quit();  // closing the browser tab
  });
});
