import { Given, When, Then } from "@wdio/cucumber-framework";
import { assert, } from "chai";


Given(/^I open google page$/, async function () {
  await browser.url("https://www.google.com/");
  // await browser.debug();
});

When(/^Search with (.*)$/, async function (searchItem) {
  console.log(`>>> My search item is ${searchItem}`);
  let ele = await $(`[name=q]`);
  await ele.setValue(searchItem);
  await browser.keys("Enter");
});

Then(/^Click on the first occurrence result$/, async function () {
  let ele = await $(`<h3>`);
  await ele.click();
});

Then(/^URL should match (.*)$/, async function (expectedURL) {
  let url = await browser.getUrl();
  assert.equal(
    url,
    expectedURL,
    `Expected url ${expectedURL} did not match with the Actual url ${url}`
  );
});


