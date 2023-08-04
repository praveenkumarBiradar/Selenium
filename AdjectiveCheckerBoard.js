const {Builder, By, Key, until, Actions, LegacyActions,webdriver} = require('selenium-webdriver');
const assert = require("assert");
(async function example() {
  driver = await new Builder().forBrowser('firefox').build();
  await driver.get("http://edtest70.edcite-dev.com/usr/signin.html");
    await driver.findElement(By.id("userid")).sendKeys("praveen1476");
    await driver.findElement(By.id("password")).sendKeys("praveen");
    await driver.findElement(By.id("loginBtn")).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//a[text()="Questions"]')).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//a[text()="Create Question"]')).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//a[text()="Full Listing"]')).click();
    await driver.sleep(3000);
    // click on create  
    await driver.findElement(By.xpath('//a[@id="delbtn_ipankaj_adjectiveboard"]')).click();
    await driver.sleep(4000);
    await driver.findElement(By.id("itemname")).sendKeys("Adjective CheckerBoard");
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//span[text()="Preview"]')).click();
    await driver.sleep(3000); 
    await driver.findElement(By.xpath('//button[text()="Start"]')).click();
    await driver.sleep(2000);
    await driver.findElement(By.id("0")).click();
    await driver.sleep(2000);
    await driver.findElement(By.id("parccAns_ach_compAns")).sendKeys("sss");


   
    

})();