const {Builder, By, key, util} = require("selenium-webdriver");
var assert = require('assert');
async function example3(){
    let driver = await new Builder().forBrowser("firefox").build();
    
    var a =Math.floor(Math.random()*100);
    //console.log(a +" hii");
    await driver.manage().setTimeouts({ implicit: 30000});
   console.log('a' +a);
    await driver.get("http://edtest70.edcite-dev.com/usr/signin.html");
    var Actualurl = await driver.getCurrentUrl();
    var Expectedurl = "http://edtest70.edcite-dev.com/usr/signin.html";
    assert.equal(Expectedurl, Actualurl);
    //console.log("The current url is : " + url);

   await driver.findElement(By.id("userid")).sendKeys("praveen1476");
   await driver.findElement(By.id("password")).sendKeys("praveen");
   await driver.findElement(By.id("loginBtn")).click();
    	
   await driver.sleep(10000);
   //var Title = await driver.getTitle();
   //console.log('Title is:',Title);
   //console.log('Title is:',Title); //assert
   var ActualTitle = await driver.getTitle();
   var ExpectedTitle = "Teacher Home | Edcite";
   assert.equal(ExpectedTitle, ActualTitle);

  await driver.findElement(By.xpath('//a[text()="Roster"]')).click(); 
  await driver.findElement(By.xpath('//a[text()="My Students"]')).click();
 // var Title1 = await driver.getTitle();
  //console.log('Title is:',Title1); 

   var ActualTitle1 = await driver.getTitle();
   var ExpectedTitle1 = "My Students | Edcite";
   assert.equal(ExpectedTitle1, ActualTitle1);

  await driver.sleep(10000); 
  await driver.findElement(By.xpath('//button[@class="btn btn-default create-student"]')).click();
  await driver.findElement(By.xpath('//input[@class="form-control form-control"]')).sendKeys("sharuk");
  await driver.findElement(By.xpath('//input[@name="sm-userid"]')).sendKeys("sharuk"+a);
  await driver.findElement(By.xpath('//input[@name="sm-password"]')).sendKeys("sharath");
  await driver.findElement(By.xpath('//button[@class="eg btn btn-default"]')).click();
  await driver.sleep(5000); 
  await driver.findElement(By.xpath('//a[text()="sharuk"]/ancestor::tr/td/input')).click();
  await driver.sleep(5000);
  await driver.findElement(By.id("stdnt-action-dd")).click();
  await driver.findElement(By.xpath('//a[text()="Delete Student(s)"]')).click();
  driver.switchTo().alert().accept();
  console.log("Student deleted successfully");

}
example3();