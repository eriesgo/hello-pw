const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

const { expect } = require('@playwright/test');

const PW_URL = "https://playwright.dev/"

Given("Bob opens Playwright website", { timeout: 60 * 1000 }, async function () {
    await this.openUrl(PW_URL);
});

When("Bob goes to {string}", async function (pageName) {
    // Click the get started link.
    await this.page.getByRole('link', { name: pageName }).click();

});

Then("Bob sees {string}", async function (pageHeading) {
    // Expects page to have a heading with the name of Installation.
    await expect(this.page.getByRole('heading', { name: pageHeading })).toBeVisible();
});