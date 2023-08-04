const {Builder, By, Key,until,} = require('selenium-webdriver');
var assert = require('assert');
//Describe Block
describe("Create student and delete  ", function()
{
  let driver

  before(async function(){
    driver = await new Builder().forBrowser('firefox').build(); //  Browser Launch
    await driver.manage().setTimeouts({ implicit: 70000});
    await driver.get("http://edtest70.edcite-dev.com/usr/signin.html"); // Enter URL
 })
 after(async function(){
   await driver.quit();  // closing the browser tab
 })

  it(" Create student ",async function example() {
   // let driver = await new Builder().forBrowser("firefox").build(); //Before
    var a =Math.floor(Math.random()*100);
    var Actualurl = await driver.getCurrentUrl();
    //var Expectedurl = "http://edtest70.edcite-dev.com/usr/signin.html";
    assert.equal("http://edtest70.edcite-dev.com/usr/signin.html", Actualurl);
   // Login as a teacher
   await driver.findElement(By.id("userid")).sendKeys("praveen1476"); // enter username
   await driver.findElement(By.id("password")).sendKeys("praveen"); // enter password
   await driver.findElement(By.id("loginBtn")).click();	 // Click on login button
   await driver.sleep(10000); //sleep minimized (***)
   // verifythe page tittle
   var ActualTitle = await driver.getTitle();
   //var ExpectedTitle = "Teacher Home | Edcite";
   assert.equal("Teacher Home | Edcite", ActualTitle);
  await driver.findElement(By.xpath('//a[text()="Roster"]')).click();  // click on Roster
  await driver.findElement(By.xpath('//a[text()="My Students"]')).click(); // Click on My student
  var ActualTitle1 = await driver.getTitle(); // Verify the page tittle
 // var ExpectedTitle1 = "My Students | Edcite";
  assert.equal("My Students | Edcite", ActualTitle1);
  await driver.sleep(10000); // Explicit wait(***)
  await driver.findElement(By.xpath('//button[@class="btn btn-default create-student"]')).click(); // Click on create student
  await driver.findElement(By.xpath('//input[@class="form-control form-control"]')).sendKeys("sharuk"); //Enter UserName
  await driver.findElement(By.xpath('//input[@name="sm-userid"]')).sendKeys("pramod"+a); // Enter USERID
  await driver.findElement(By.xpath('//input[@name="sm-password"]')).sendKeys("sharath"); // Enter Password
  await driver.findElement(By.xpath('//button[@class="eg btn btn-default"]')).click(); // Click on Create Student
  await driver.sleep(5000); //
  })
  it(" Delete the student ",async function example1() {
  // select student
  await driver.findElement(By.xpath('//a[text()="sharuk"]/ancestor::tr/td/input')).click(); 
  // click on Student Actions
  await driver.findElement(By.id("stdnt-action-dd")).click();
  // click on delete student
  await driver.findElement(By.xpath('//a[text()="Delete Student(s)"]')).click();
  driver.switchTo().alert().accept();
  console.log("Student deleted successfully"); // validation
  await driver.sleep(5000);
  // click on UserName
  await driver.findElement(By.xpath('//span[@class="user-name"]')).click();
  // click on logout button
  await driver.findElement(By.xpath('//a[text()="Logout"]')).click(); 
    //await driver.quit(); //after
  });
});