const {Builder, By, Key,until} = require('selenium-webdriver');
var assert = require('assert');
//Describe Block

async function example1(){
        let driver = await new Builder().forBrowser('firefox').build();
          await driver.manage().setTimeouts({ implicit: 30000});
          await driver.get("http://edtest70.edcite-dev.com/usr/signin.html");
          await driver.findElement(By.id("userid")).sendKeys("praveen1476");
          await driver.findElement(By.id("password")).sendKeys("praveen");
          await driver.findElement(By.id("loginBtn")).click();
          await driver.sleep(10000);
          var ActualTitle = await driver.getTitle();
          assert.equal("Teacher Home | Edcite", ActualTitle);
         // await driver.quit();  
 
         await driver.sleep(10000);
  
   // await driver.findElement(By.xpath('//span[@id="selSlide"]')).click();
   await driver.findElement(By.id("selSlide")).click();
         
          await driver.sleep(10000);
          await driver.findElement(By.xpath('//button[@class="btn eg"]')).click();
        await driver.sleep(10000);
       // await driver.findElement(By.xpath('/html/body/div[19]/div[2]/div/div/div[2]/div/div/div/div/div/div[1]/div/div[1]/div[2]/table/tbody/tr[2]/td[1]/input')).click(); 
         // await driver.quit(); 
        // driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    driver.manage().window().maximize();
    await driver.sleep(10000);   
    await driver.findElement(By.xpath('//div[text()="1998"]/ancestor::tr/td/input')).click();
    await driver.sleep(10000);
    await driver.findElement(By.xpath('/html/body/div[19]/div[2]/div/div/div[3]/div/button[2]')).click();
    await driver.sleep(10000);
    await driver.findElement(By.xpath('//button[@class="btn btn-default prim"]')).click();
    await driver.sleep(10000);
    console.log("Before assign");
    await driver.findElement(By.xpath('//button[@class="btn clsUnassignBtn"]')).click();
    console.log("After Assign");
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//button[text()="Close"]')).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//span[text()="praveen"]')).click();
    await driver.findElement(By.xpath('//a[text()="Logout"]')).click(); 
    await driver.quit();
    
        };
        example1();