import { device, expect, element, by } from "detox";
import { act, render } from "@testing-library/react-native";
import useNews from "../../src/hooks/useNews";
import NewsRepository from "../../src/api/client";
import { renderHook } from "@testing-library/react-hooks";

jest.mock("../../src/api/client", () => ({
  getAllNewsEverything: jest.fn(),
}));

describe("useNews", () => {
  it("should fetch news and set loading to false", async () => {
    const mockNewsData = [
      { id: 1, title: "News 1", description: "Description 1" },
      { id: 2, title: "News 2", description: "Description 2" },
    ];

    NewsRepository.getAllNewsEverything.mockResolvedValue({
      data: mockNewsData,
      error: null,
    });

    let result: any;
    await act(async () => {
      result = renderHook(() => useNews());
    });

    const [newsEverything, loading] = result.current;

    expect(NewsRepository.getAllNewsEverything).toHaveBeenCalledTimes(1);
    expect(newsEverything).toEqual(mockNewsData);
    expect(loading).toBe(false);
  });

  it("should handle error and set loading to false", async () => {
    const mockError = "API error";

    NewsRepository.getAllNewsEverything.mockResolvedValue({
      data: null,
      error: mockError,
    });

    let result: any;
    await act(async () => {
      result = renderHook(() => useNews());
    });

    const [newsEverything, loading] = result.current;

    expect(NewsRepository.getAllNewsEverything).toHaveBeenCalledTimes(1);
    expect(newsEverything).toEqual([]);
    expect(loading).toBe(false);
  });
});
