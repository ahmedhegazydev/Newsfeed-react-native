import { device, expect, element, by } from "detox";
import jestExpect from "expect";

describe("HomeScreen", () => {
  beforeEach(async () => {
    // await device.reloadReactNative();
    await device.launchApp();
  });

  it("should toggle the theme when the toggleThemeButton is pressed", async () => {
    const themeText = element(by.id("themeText"));

    // Get the initial theme value
    const initialTheme = await themeText.getAttributes().text;

    // Tap on the toggleThemeButton
    await element(by.id("toggleThemeButton")).tap();

    // Get the updated theme value
    const updatedTheme = await themeText.getAttributes().text;

    // Assert that the theme has been toggled
    jestExpect(updatedTheme).not.toBe(initialTheme);
  });

  afterEach(async () => {
    // Perform any cleanup or reset actions after each test case
  });
});
