const {Builder, By, Key, until} = require('selenium-webdriver');
const assert = require("assert");
//Describe Block
describe("Assign and Unassign ", function()
{
  let driver

  before(async function(){
    driver = await new Builder().forBrowser('firefox').build();
    await driver.get("http://edtest70.edcite-dev.com/usr/signin.html");
  })
  after(async function(){
    await driver.quit();
  }) 
  it(" Assign ",async function example() {

  
    //login as teacher    
    await driver.findElement(By.id("userid")).sendKeys("praveen1476");
    await driver.findElement(By.id("password")).sendKeys("praveen");
    await driver.findElement(By.id("loginBtn")).click();
    await driver.sleep(10000);
          //page validation
          var ActualTitle = await driver.getTitle();
          var ExpectedTitle = "Teacher Home | Edcite";
          assert.equal(ExpectedTitle, ActualTitle);
          await driver.sleep(10000);
          //click on recent Assignment
    await driver.findElement(By.id("selSlide")).click();
    await driver.sleep(10000);
    // Click on Assign
    await driver.findElement(By.xpath('//button[@class="btn eg"]')).click();
    await driver.sleep(10000);
    driver.manage().window().maximize(); //before
    await driver.sleep(10000);  //explict 
    // Select class
        await driver.findElement(By.xpath('//div[text()="1998"]/ancestor::tr/td/input')).click();
        await driver.sleep(10000); 
        // click on assign
        await driver.findElement(By.xpath('/html/body/div[19]/div[2]/div/div/div[3]/div/button[2]')).click(); //use relative xpath (***)
        await driver.sleep(10000);
  })
  it(" UnAssign ",async function example1() {
        // click on manage Assignment
        await driver.findElement(By.xpath('//button[@class="btn btn-default prim"]')).click();
        await driver.sleep(10000);
        // click on Unassign
        await driver.findElement(By.xpath('//button[@class="btn clsUnassignBtn"]')).click();
        console.log("After Assign");
        //click on close button
        await driver.sleep(5000);
        await driver.findElement(By.xpath('//button[text()="Close"]')).click();
        //logout should be added
        await driver.sleep(5000);
        //click on user name
        await driver.findElement(By.xpath('//span[text()="praveen"]')).click();
        // click on logout button
        await driver.findElement(By.xpath('//a[text()="Logout"]')).click(); 
        //await driver.quit();
       
  });
});