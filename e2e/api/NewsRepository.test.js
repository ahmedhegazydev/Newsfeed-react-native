import { device, expect, element, by } from "detox";
import axios from "axios";
import client from "../../src/api/client";
import { API_URL, HEADLINES } from "../../src/constants/constants";
import NewsRepository from "../../src/api/NewApi";
import jestExpect from "expect";

// Passed

describe("NewsRepository", () => {
  beforeEach(async () => {});

  it("test fetch all top headings news when calling getAllNewsEverything expect size != 0", async () => {
    const response = await NewsRepository.getAllNewsEverything();

    jestExpect(response.error).toBe("");
    jestExpect(response.data).toBeTruthy();
    jestExpect(response.data.length).toBeGreaterThan(0);
  });

  it("test search news when query empty expect size  = 0 ", async () => {
    const query = "";
    const response = await NewsRepository.searchNews(query);

    jestExpect(response.error).toBe("");
    jestExpect(response.data).toBeTruthy();
    jestExpect(response.data.length).toEqual(0);
  });

  it("test search news when query not empty expect size  !=  0 ", async () => {
    const query = "Business";
    const response = await NewsRepository.searchNews(query);

    jestExpect(response.error).toBe("");
    jestExpect(response.data).toBeTruthy();
    jestExpect(response.data.length).toBeGreaterThan(0);
  });

  afterEach(async () => {
    // Perform any cleanup or reset actions after each test case
  });
});
