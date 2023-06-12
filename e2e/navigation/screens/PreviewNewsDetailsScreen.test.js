import { device, expect, element, by } from "detox";
import jestExpect from "expect";
import { renderHook, act } from "@testing-library/react-hooks";
import useNews from "../../../src/hooks/useNews";
import { waitFor } from "@testing-library/react-native";

// Passed

// expect.extend({
//   async toBeNotVisible(element) {
//     const isVisible = await element.isVisible();
//     const pass = !isVisible;
//     const message = () =>
//       `Expected element to not be visible, but it is visible.`;
//     return { pass, message };
//   },
// });

describe("PreviewNewsDetailsScreen", () => {
  beforeEach(async () => {
    await device.launchApp({ newInstance: true, url: "myapp://app/allNews/3" });
  });

  it("should display the correct news details", async () => {
    const titleElement = element(by.id("titleText"));
    const descriptionElement = element(by.id("descriptionText"));
    const publishedAtElement = element(by.id("publishedAtText"));

    // await expect(titleElement).toHaveText("The Federal Government vs. Imaginary Business Felons - The Wall Street Journal transformed text was The Federal Government vs. Imaginary Business Felons - The Wall Street Journal");
    // await expect(descriptionElement).toHaveText("Expected Description");
    await expect(publishedAtElement).toHaveText("Published At:");
  });

  afterEach(async () => {
    // Perform any cleanup or reset actions after each test case
  });
});
