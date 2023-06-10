import { device, expect, element, by } from "detox";
import axios from "axios";
import newsApi from "../../src/api/client";
import { API_URL } from "../../src/constants/constants";

describe("News API", () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  //   it("should fetch all news articles", async () => {
  //     const response = await axios.get(`${API_URL}/articles`);
  //     expect(response.status).toBe(200);
  //     expect(response.data).toBeDefined();
  //     expect(response.data.length).toBeGreaterThan(0);
  //   });

  //   it("should fetch a specific news article by ID", async () => {
  //     const articleId = "12345";
  //     const response = await newsApi.get(`/articles/${articleId}`);
  //     expect(response.status).toBe(200);
  //     expect(response.data).toBeDefined();
  //     expect(response.data.id).toBe(articleId);
  //   });

  afterEach(async () => {
    // Perform any cleanup or reset actions after each test case
  });
});
