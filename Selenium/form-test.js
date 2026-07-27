const { Builder, By, until } = require("selenium-webdriver");
require("chromedriver");

async function formTest() {
    let driver = await new Builder()
        .forBrowser("chrome")
        .build();

    try {
        await driver.get("https://www.saucedemo.com/");

        await driver.findElement(By.id("user-name")).sendKeys("standard_user");
        await driver.findElement(By.id("password")).sendKeys("secret_sauce");
        await driver.findElement(By.id("login-button")).click();

        await driver.wait(until.elementLocated(By.className("title")), 5000);

        let heading = await driver.findElement(By.className("title")).getText();

        if (heading === "Products") {
            console.log("✅ Form submitted successfully");
        } else {
            console.log("❌ Verification failed");
        }

    } finally {
        await driver.quit();
    }
}

formTest();