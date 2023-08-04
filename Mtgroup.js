const {Builder, By, Key, until, Action, LegacyActions,webdriver} = require('selenium-webdriver');
const assert = require("assert");

(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  
    var a =Math.floor(Math.random()*10000);
    await driver.get('http://edtest70.edcite-dev.com/usr/signin.html');
    driver.findElement(By.id("userid")).sendKeys("masterpraveen");
    driver.findElement(By.id("password")).sendKeys("praveen");
    driver.findElement(By.id("loginBtn")).click(); 
    await driver.sleep(7000);
    var ActualTitle = await driver.getTitle(); // Get the page tittle
    assert.equal('Admin Home | Edcite Schools', ActualTitle); 
 
   await driver.findElement(By.xpath('//a[text()="ROSTERS"]')).click();
   await driver.sleep(2000);
   await driver.findElement(By.xpath('//a[text()="District Teachers"]')).click();
   await driver.findElement(By.id("groupActionsDD")).click(); 
   await driver.sleep(5000);
   await driver.findElement(By.xpath('//li[text()="Create new Group"]')).click();
   await driver.findElement(By.id("newGroupNameInput")).sendKeys(a+"Tgroup");
   await driver.findElement(By.id("newGroupNameSubmit")).click();
   await driver.sleep(3000);
   await driver.findElement(By.xpath('//p[@class="sideMenuLabel"]')).click();
   await driver.sleep(3000);
   await driver.findElement(By.xpath('//li[text()="BIJAPUR"]')).click();
   await driver.sleep(2000);
   var Tcount = await driver.findElement(By.xpath('//div[@class="dataTables_info"]')).getText();
   console.log(Tcount);
   await driver.findElement(By.xpath('//input[@id="selectAllChBx"]')).click();
   //console.log(Tcount);

   //await driver.switchTo().alert().accept();
  
  
})();