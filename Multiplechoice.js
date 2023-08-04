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
    await driver.findElement(By.id("gbuttonEdit")).click();
    await driver.sleep(3000);
    await driver.findElement(By.xpath('//input[@id="itemname"]')).clear();
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//input[@id="itemname"]')).sendKeys("Multiple choice");
    await driver.sleep(3000);
    await driver.findElement(By.id("prompt0")).sendKeys("Who is the prime minister of India");
    await driver.findElement(By.id("choice00")).sendKeys("Narendra Modhi");
    await driver.findElement(By.id("choice01")).sendKeys("Rahul Gandhi");
    await driver.findElement(By.id("choice02")).sendKeys("devegowda");
    await driver.findElement(By.id("choice03")).sendKeys("Kejriwal");
    await driver.findElement(By.xpath("//button[@class='abuttonmce darkclsmce']")).click();

})();