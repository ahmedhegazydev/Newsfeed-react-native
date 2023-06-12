import { device, expect, element, by } from "detox";
// import { act } from "@testing-library/react-native";
import useNews from "../../src/hooks/useNews";
import NewsRepository from "../../src/api/client";
import { renderHook, act } from "@testing-library/react-hooks";
// import { renderHook } from "@testing-library/react-hooks";
import jestExpect from "expect";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { HEADLINES } from "../../src/constants/constants";

jest.mock("../../src/api/client", () => ({
  getAllNewsEverything: jest.fn(),
}));

describe("useNews", () => {
  const mock = new MockAdapter(axios);

  beforeEach(() => {
    // device.launchApp();
    mock.reset(); // Reset the mock adapter before each test
  });

  test("should fetch news and set loading state", async () => {
    // const mockedNewsData = [
    //   {
    //     id: 1,
    //     title: "Sample News 1",
    //     description: "Lorem ipsum dolor sit amet 1",
    //     // other properties
    //   },
    //   {
    //     id: 2,
    //     title: "Sample News 2",
    //     description: "Lorem ipsum dolor sit amet 2",
    //     // other properties
    //   },
    // ];
    // Mock the API request and provide a mocked response
    // mock.onGet(`${HEADLINES}`).reply(5000, { data: mockedNewsData });

    const { result, waitForNextUpdate } = renderHook(() => useNews());

    jestExpect(result.current[0]).toBe(null); // Initial value of newsEverything
    jestExpect(result.current[1]).toBe(true); // Initial value of loading

    await act(async () => {
      await waitForNextUpdate({ timeout: 10000 }); // Increase the timeout duration
    });
    // await waitForNextUpdate();

    jestExpect(result.current[0]).not.toBe(null); // Updated value of newsEverything
    jestExpect(result.current[1]).toBe(false); // Updated value of loading
  });

  // it("should fetch news and set loading to false", async () => {
  //   const mockNewsData = [
  //     { id: 1, title: "News 1", description: "Description 1" },
  //     { id: 2, title: "News 2", description: "Description 2" },
  //   ];

  //   NewsRepository.getAllNewsEverything.mockResolvedValue({
  //     data: mockNewsData,
  //     error: null,
  //   });

  //   let result: any;
  //   await act(async () => {
  //     result = renderHook(() => useNews());
  //   });

  //   const [newsEverything, loading] = result.current;

  //   jestExpect(NewsRepository.getAllNewsEverything).toHaveBeenCalledTimes(1);
  //   jestExpect(newsEverything).toEqual(mockNewsData);
  //   jestExpect(loading).toBe(false);
  // });

  // it("should handle error and set loading to false", async () => {
  //   const mockError = "API error";

  //   NewsRepository.getAllNewsEverything.mockResolvedValue({
  //     data: null,
  //     error: mockError,
  //   });

  //   let result: any;
  //   await act(async () => {
  //     result = renderHook(() => useNews());
  //   });

  //   const [newsEverything, loading] = result.current;

  //   jestExpect(NewsRepository.getAllNewsEverything).toHaveBeenCalledTimes(1);
  //   jestExpect(newsEverything).toEqual([]);
  //   jestExpect(loading).toBe(false);
  // });
});
