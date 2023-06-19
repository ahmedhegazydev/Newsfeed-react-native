import { device, expect, element, by } from "detox";

describe("Deep Linking", () => {
  beforeEach(async () => {});

  it("should open the app and navigate to the specified screen", async () => {
    // Open the app using the deep linking URL
    await device.launchApp({ newInstance: true, url: "myapp://app/allNews/3" });

    // Assert that the app has opened and navigated to the specified screen
    await expect(element(by.id("newsDetailsScreen"))).toBeVisible();
  });
});
