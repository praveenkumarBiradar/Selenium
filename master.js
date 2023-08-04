const {Builder, By, Key, until, Actions, LegacyActions,webdriver} = require('selenium-webdriver');
const assert = require("assert");
(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  
    var a =Math.floor(Math.random()*10000);
    await driver.get('http://edtest70.edcite-dev.com/usr/signin.html');
    driver.findElement(By.id("userid")).sendKeys("masterpraveen");
    driver.findElement(By.id("password")).sendKeys("praveen");
    driver.findElement(By.id("loginBtn")).click(); 
    await driver.sleep(5000);
    var ActualTitle = await driver.getTitle(); // Get the page tittle
    assert.equal('Admin Home | Edcite Schools', ActualTitle); 
    //await driver.actions().keyDown(Key.SHIFT).perform(); CONTENT
   // await driver.findElement(By.xpath('//a[@class="dropdown-toggle"]')).click(); 

   // await driver.actions().keyDown(Key.SHIFT).perform();
   await driver.findElement(By.xpath('//a[text()="CONTENT"]')).click();
   await driver.sleep(2000);
   await driver.findElement(By.xpath('//a[text()="District Distributions"]')).click();
   await driver.findElement(By.id("distActionsDD")).click(); 
   await driver.sleep(5000);
   await driver.findElement(By.id("createDist")).click();
   await driver.sleep(4000);
   await driver.findElement(By.xpath('//a[@class="btn btn-success selectAssnToD"]')).click();
   await driver.sleep(3000);
   await driver.findElement(By.xpath('//input[@id="newDepLabel"]')).sendKeys(a+"ttest"); 
   var name = a+"ttest";
  
   await driver.findElement(By.xpath('//button[@id="newDeployBtn"]')).click();
   await driver.sleep(3000);
   await driver.findElement(By.id('saveDA')).click();
   await driver.sleep(3000);
  
   await driver.findElement(By.xpath('//*[@id="openAddCs"]')).click();
   await driver.sleep(8000);
   await driver.findElement(By.xpath('//input[@class="chk-cls-md"]')).click();
   await driver.sleep(5000);
   
   await driver.findElement(By.xpath('//button[@class="btn btn-warning addSelCs"]')).click();
   await driver.sleep(3000);
   var accesscode = await driver.findElement(By.id("assn-code")).getText();
  const first5 = accesscode.split('').slice(0, 6).join('');
  console.log(first5);
  await driver.get("http://edtest70.edcite-dev.com/go");
  await driver.sleep(5000);
  await driver.findElement(By.xpath('//input[@class="form-control username"]')).sendKeys("kar1");
  await driver.findElement(By.xpath('//input[@class="form-control pwd"]')).sendKeys("praveen");
  await driver.findElement(By.xpath('//button[@class="btn signin2"]')).click();
  await driver.sleep(6000);
  await driver.findElement(By.xpath('//span[@class="MuiButton-label-221"]')).click();
  await driver.sleep(5000);
  await driver.findElement(By.id("start-code")).sendKeys(first5);
  await driver.sleep(3000);
  await driver.findElement(By.xpath('//span[@class="MuiButton-label-162"]')).click();
  await driver.sleep(14000);
  var ActualTitle = await driver.getTitle();
  assert.equal("Edcite | 24/12/21-ruby", ActualTitle);

  await driver.get('http://edtest70.edcite-dev.com/usr/signin.html');
  driver.findElement(By.id("userid")).sendKeys("masterpraveen");
  driver.findElement(By.id("password")).sendKeys("praveen");
  driver.findElement(By.id("loginBtn")).click(); 
  await driver.sleep(5000);
  await driver.get("http://edtest70.edcite-dev.com/mstr/Distributions");
  await driver.sleep(6000);
  await driver.findElement(By.xpath('//a[text()="ruby-24-cs-dest"]/ancestor::tr/td/input')).click(); 
  await driver.sleep(3000);
 //await driver.findElement(By.xpath('//a[text()=""+name]/ancestor::tr/td/input')).click();
   await driver.findElement(By.id("distActionsDD")).click();
   await driver.findElement(By.xpath('//li[text()="Delete Distribution"]')).click();
   await driver.switchTo().alert().accept();
  
  
})();