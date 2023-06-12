import { device, expect, element, by } from "detox";
import { HOME_NAME, LIST_ALL_NEWS_NAME } from "../../src/constants/constants";

// Passed

describe("Deep Linking", () => {
  beforeEach(async () => {});

  it("should open the app and navigate to the specified screen", async () => {
    // Open the app using the deep linking URL
    await device.launchApp({ newInstance: true, url: "myapp://app/allNews/3" });

    // Assert that the app has opened and navigated to the specified screen
    await expect(element(by.id("newsDetailsScreen"))).toBeVisible();
  });
});
