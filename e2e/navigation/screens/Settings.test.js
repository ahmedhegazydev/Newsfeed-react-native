import { device, expect, element, by, waitFor } from "detox";

describe("SettingsScreen", () => {
  beforeEach(async () => {
    await device.launchApp({ newInstance: true });
    // await device.launchApp();
    // await new Promise((resolve) => setTimeout(resolve, 5000)); // Delay for 3 seconds
    // await waitFor(element(by.id("settingsTabButton")))
    //   .toBeVisible()
    //   .withTimeout(20000);
  });

  it("should change the language setting when button is pressed", async () => {
    // Tap on the Settings tab
    await element(by.id("settingsTabButtonIcon")).tap();

    // Dump the view hierarchy for debugging
    // await device.dumpHierarchy();

    // Assert that the Settings screen is displayed
    await expect(element(by.id("settingsScreen"))).toBeVisible();

    // Tap the button to change the language
    await element(by.id("changeLanguageButton")).tap();

    // Assert that the language setting has changed
    const languageSetting = await element(
      by.id("languageSetting")
    ).getAttribute("text");
    expect(languageSetting).toBe("Arabic");
  });

  afterEach(async () => {
    // Perform any cleanup or reset actions after each test case
  });
});
