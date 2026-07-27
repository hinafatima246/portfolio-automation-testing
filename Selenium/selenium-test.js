const { Builder, By, until } = require("selenium-webdriver");
require("chromedriver");

async function navigationTest() {
    let driver = await new Builder()
        .forBrowser("chrome")
        .build();

    try {
        await driver.get("https://www.saucedemo.com/");

        await driver.findElement(By.id("user-name")).sendKeys("standard_user");
        await driver.findElement(By.id("password")).sendKeys("secret_sauce");
        await driver.findElement(By.id("login-button")).click();

        await driver.wait(until.urlContains("inventory"), 5000);

        let url = await driver.getCurrentUrl();

        console.log("Current URL:", url);

        if (url.includes("inventory")) {
            console.log("✅ Navigation Successful");
        } else {
            console.log("❌ Navigation Failed");
        }

    } finally {
        await driver.quit();
    }
}

navigationTest();