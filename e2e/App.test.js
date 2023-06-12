import { device, expect, element, by } from "detox";

describe("App", () => {
  beforeEach(async () => {
    await device.launchApp();
  });

  // it("should update the locale when localization changes", async () => {
  //   // Perform the necessary actions to trigger a localization change
  //   const initialLocale = await element(by.id("localeText")).getAttributes()
  //     .text;

  //   // Trigger the localization change
  //   await element(by.id("changeLanguageButton")).tap();

  //   // Get the updated locale value
  //   const updatedLocale = await element(by.id("localeText")).getAttributes()
  //     .text;

  //   // Assert that the locale has been updated
  //   expect(updatedLocale).not.toBe(initialLocale);
  // });

  it("should update locale when handleLocalizationChange is called", async () => {
    // Simulate a change event
    await device.sendToHome();
    const payload = {
      change: "change",
    };
    // const payload = JSON.stringify({ change: "change" });
    await device.sendUserNotification(payload);

    // Verify that the locale is updated correctly
    await expect(element(by.id("localeText"))).toHaveText("en");
  });

  afterEach(async () => {
    // Perform any cleanup or reset actions after each test case
  });
});
