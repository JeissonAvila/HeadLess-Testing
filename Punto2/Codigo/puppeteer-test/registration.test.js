'use strict';  // necessary for es6 output in node

describe("Register Angular Page", () => {
    
    beforeAll(async() => {
        await page.goto("https://angular-6-registration-login-example.stackblitz.io/register");
    }, 5000);
    
    test("Go to project", async() => {
        await expect(page).toClick('button', { text: '' })
    }, 5000);

    test("Send form empty", async() => {
        // await page.goto("https://angular-6-registration-login-example.stackblitz.io/register", {waitUntil: 'domcontentloaded'});
        let expected = ["First Name is required", "Last Name is required", "Username is required", "Password is required"];
        await page.$eval('.btn-primary', el => el.click());
        let errors = await page.$$eval('.invalid-feedback', node => node.map(n => n.innerText));
        await expect(errors).toEqual(expected);
    }, 5000);

    test("All full fields but password invalid", async() => {
        let expected = ["Password must be at least 6 characters"];
        const firstName = await page.$('input[formcontrolname=firstName]');
        await firstName.focus();
        await page.keyboard.type("Jei");
        const lastName = await page.$('input[formcontrolname=lastName]');
        await lastName.type('Avila');
        const username = await page.$('input[formcontrolname=username]');
        await username.type('J.A.');
        const password = await page.$('input[formcontrolname=password]');
        await password.type('Hola');
        await page.$eval('.btn-primary', el => el.click());
        let errors = await page.$$eval('.invalid-feedback', node => node.map(n => n.innerText));
        await expect(errors).toEqual(expected);
    }, 20000);

    test("All full fields and successfull register", async() => {
        let expected = "Registration successful";
        const password = await page.$('input[formcontrolname=password]');
        await password.type('123');
        await page.$eval('.btn-primary', el => el.click());
        let success = await page.$eval('.alert-success', n => n.innerText);
        await expect(success).toEqual(expected);
    }, 10000);

    test("Login with the new user", async() => {
        let expected = "Hi Jei!";
        const username = await page.$('input[formcontrolname=username]');
        await username.type('J.A.');
        const password = await page.$('input[formcontrolname=password]');
        await password.type('Hola123');
        await page.$eval('.btn-primary', el => el.click());
        let success = await page.$eval('h1', n => n.innerText);
        await expect(success).toEqual(expected);
    }, 20000);
});