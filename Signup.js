const {Builder, By, Key, until, Actions, LegacyActions,webdriver} = require('selenium-webdriver');
const assert = require("assert");
(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  await driver.get("http://edtest70.edcite-dev.com/pub/apps/tani/1/edciteLP_v3.html");
  await driver.findElement(By.xpath('//button[@class="btn dropdown-toggle navbar-join"]')).click();
  await driver.findElement(By.xpath('//li[text()="As a Teacher"]')).click();
  var a =Math.floor(Math.random()*100);
  await driver.findElement(By.id("fullName")).sendKeys("test11"+a);
  await driver.findElement(By.id("emailid")).sendKeys(a+"test11@gmail.com");
  await driver.findElement(By.id("userid")).sendKeys("test1o41"+a);
  await driver.findElement(By.id("pwd")).sendKeys("test1");
  await driver.findElement(By.id("pwd1")).sendKeys("test1");
  await driver.findElement(By.id("submit-signup-btn")).click();
 // await driver.findElement(By.id("tinfo-state-dd")).click();
  //await driver.findElement(By.xpath('//a[@name="state"]')).click();
  await driver.sleep(3000);
  //var alert = await driver.switchTo().alert();
  //alert.accept();
  await driver.close();
  driver = await new Builder().forBrowser('firefox').build();
  await driver.get("http://edtest70.edcite-dev.com/usr/signin.html");
    await driver.findElement(By.id("userid")).sendKeys("test1o41"+a);
    await driver.findElement(By.id("password")).sendKeys("test1");
    await driver.findElement(By.id("loginBtn")).click();
    await driver.sleep(3000);
  // await driver.findElement(By.xpath('//button[@class="close"]')).click();

    var ActualTitle = await driver.getTitle(); // Get the page tittle
    assert.equal("Teacher Home | Edcite", ActualTitle);  
    //console.log(ActualTitle);
    //await driver.sleep(5000);
    //await driver.findElement(By.id("tinfo-state-dd")).click();
    //await driver.sleep(3000);
    //await driver.findElement(By.xpath('//a[@name="state"]')).click();
    //await driver.findElement(By.xpath('//button[text()="Save Info"]')).click();

})();