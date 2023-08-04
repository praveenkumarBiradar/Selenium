const {Builder, By, Key, until} = require('selenium-webdriver');
var assert = require('assert');
var a =Math.floor(Math.random()*1000);
//Describe Block
describe("signup and login", function()
{
  let driver


  before(async function(){
     driver = await new Builder().forBrowser('firefox').build(); //  Browser Launch
     await driver.manage().setTimeouts({ implicit: 30000});
     await driver.get("http://edtest70.edcite-dev.com/pub/apps/tani/1/edciteLP_v3.html");
     await driver.findElement(By.xpath('//button[@class="btn dropdown-toggle navbar-join"]')).click();
     await driver.findElement(By.xpath('//li[text()="As a Teacher"]')).click();
     
  })
  after(async function(){
    await driver.quit();  // closing the browser tab
  })
  
  it(" Signup and login  ",async function example() {
  await driver.sleep(3000);
  //var a =Math.floor(Math.random()*100);
  await driver.findElement(By.id("fullName")).sendKeys("test1"+a);
  await driver.findElement(By.id("emailid")).sendKeys(a+"test1@gmail.com");
  await driver.findElement(By.id("userid")).sendKeys("test1o4"+a);
  await driver.findElement(By.id("pwd")).sendKeys("test1");
  await driver.findElement(By.id("pwd1")).sendKeys("test1");
  await driver.findElement(By.id("submit-signup-btn")).click();
  await driver.sleep(3000);
 // var alert = await driver.switchTo().alert();
  //alert.accept();
 // await driver.close();
  })
  it("  login  ",async function example1() {
 // driver = await new Builder().forBrowser('firefox').build();
  await driver.get("http://edtest70.edcite-dev.com/usr/signin.html");
    await driver.findElement(By.id("userid")).sendKeys("test1o4"+a);
    await driver.findElement(By.id("password")).sendKeys("test1");
    await driver.findElement(By.id("loginBtn")).click();
    await driver.sleep(3000);
    var ActualTitle = await driver.getTitle(); // Get the page tittle
    assert.equal("Teacher Home | Edcite", ActualTitle);  
  });
})