const {Builder, By, Key, until, Actions, LegacyActions,webdriver} = require('selenium-webdriver');
const assert = require("assert");
(async function example() {
  driver = await new Builder().forBrowser('firefox').build();
  await driver.get("http://edtest70.edcite-dev.com/usr/signin.html");
    await driver.findElement(By.id("userid")).sendKeys("praveen1476");
    await driver.findElement(By.id("password")).sendKeys("praveen");
    await driver.findElement(By.id("loginBtn")).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//a[text()="Assignments"]')).click();
    await driver.sleep(5000);
    //click on create assignment
    await driver.findElement(By.xpath('//a[text()="Create Assignment"]')).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//span[text()="Active"]')).click();
    await driver.sleep(3000);
    await driver.findElement(By.xpath('//input[@class="assnname"]')).clear();
    //Enter assignment name
    await driver.findElement(By.xpath('//input[@class="assnname"]')).sendKeys("July 21st");
    await driver.sleep(2000);
    //Click on save the assignment
    await driver.findElement(By.xpath('//button[text()="Save"]')).click();
    await driver.findElement(By.xpath('//button[text()="Find Existing"]')).click();
    await driver.sleep(5000);
    
    await driver.findElement(By.xpath('//ul[@class="nav nav-tabs itemPickTab"]')).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath('/html/body/div[27]/div/div/div[1]/div/div[2]/div[3]/table/thead/tr/th[1]/input')).click();
    await driver.sleep(5000);
    //click on add selected Questions
    await driver.findElement(By.xpath('//button[text()="Add Selected Question(s)"]')).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//button[text()="Assign"]')).click();
    await driver.sleep(8000);
    //select classes
    await driver.findElement(By.xpath('//div[text()="1998"]/ancestor::tr/td/input')).click();
    await driver.sleep(3000);
    //Click on assign
    await driver.findElement(By.xpath('//button[@class="btn eg"]')).click();
    //Click on close (Closing the model)
    await driver.findElement(By.xpath('//button[text()="Close"]')).click();
    await driver.sleep(30000);
    await driver.findElement(By.xpath('//span[@class="user-name"]')).click(); // Click on User-name
    await driver.findElement(By.xpath('//a[text()="Logout"]')).click();  // click on logout 
    await driver.sleep(3000);
   // await driver.get("http://edtest70.edcite-dev.com/go");
   // await driver.sleep(5000);
   // await driver.findElement(By.xpath('//input[@class="form-control username"]')).sendKeys("kar1");
  //  await driver.findElement(By.xpath('//input[@class="form-control pwd"]')).sendKeys("praveen");
  //  await driver.findElement(By.xpath('//button[@class="btn signin2"]')).click();
  //  await driver.sleep(6000);
   // await driver.findElement(By.xpath('//button[text()="July 21st"]')).click();
  //  await driver.sleep(4000);
 
    

})();