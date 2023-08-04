const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('tutorialspoint', Key.RETURN);
    //await driver.findElement(By.xpath("//*[text()='tutorialspoint')]")).click(); 
  } finally {
    
  }
})();