import { device, expect, element, by } from "detox";
import axios from "axios";
import newsApi from "../../src/api/client";
import { API_URL, HEADLINES, SEARCH } from "../../src/constants/constants";
import jestExpect from "expect";

describe("News API", () => {
  beforeEach(async () => {
    // await device.launchApp();
    // await device.reloadReactNative();
  });
  it("should fetch all news articles", async () => {
    const response = await newsApi.get(`${HEADLINES}`);
    jestExpect(response.status).toBe(200);
    jestExpect(response.data).toBeDefined();
    // jestExpect(response.data.length).toBeGreaterThan(0);
  });
  it("should fetch a specific news article by ID", async () => {
    const articleId = "12345";
    const response = await newsApi.get(`${SEARCH}&q=${articleId}`);
    jestExpect(response.status).toBe(200);
    jestExpect(response.data).toBeDefined();
    // jestExpect(response.data.id).toBe(articleId);
  });
  afterEach(async () => {
    // Perform any cleanup or reset actions after each test case
  });
});
