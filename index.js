const {Builder, By, Key,org, Util} = require("selenium-webdriver");

async function example(){
    let driver = await new Builder().forBrowser("firefox").build();
   await driver.get("https://www.google.com/");
   driver.findElement(By.xpath("//input[@class='gLFyf gsfi']")).sendKeys("Selenium",Key.RETURN);
   driver.executeScript("window.scrollTo(0, document.body.scrollHeight)");
  
   //driver.findElement(By.id("selSlide")).click();
}
example();