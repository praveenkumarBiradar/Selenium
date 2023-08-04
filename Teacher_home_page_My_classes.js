const {Builder, By, Key, until} = require('selenium-webdriver');
//var assert = require('assert');
//Describe Block
async function example4() {
    let driver = await new Builder().forBrowser('firefox').build(); //  Browser Launch
   // await driver.manage().setTimeouts({ implicit: 30000});
    await driver.get("http://edtest70.edcite-dev.com/usr/signin.html"); // Login as a teacher
    await driver.findElement(By.id("userid")).sendKeys("praveen1476");
    await driver.findElement(By.id("password")).sendKeys("praveen");
    await driver.findElement(By.id("loginBtn")).click();
    await driver.sleep(15000);
   var a= await driver.findElement(By.xpath('//input[@class="seach-classes-i form-control"]'));
    //await driver.findElement(By.xpath('//div[@class="class-name-div"]'));
    a.sendKeys("bld");
    console.log("aaa");
    await driver.sleep(5000);
    a.clear();
    console.log("aaa");
    // Sort the classes 
    await driver.sleep(5000);
    await driver.findElement(By.id("sort-classes-dd")).click(); 
    await driver.sleep(5000);
    console.log("aaa");
    await driver.findElement(By.xpath('//a[@name="alpha"]')).click();
    console.log("aaa");
    await driver.findElement(By.id("sort-classes-dd")).click(); 
    await driver.findElement(By.xpath('//a[@name="created"]')).click();
    await driver.findElement(By.id("sort-classes-dd")).click(); 
    await driver.findElement(By.xpath('//a[@name="num_students"]')).click(); 
    await driver.findElement(By.id("sort-classes-dd")).click(); 
    await driver.findElement(By.xpath('//a[@name="assigned"]')).click();
    await driver.sleep(10000);
    // create new class
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
    await driver.quit();

};example4();
