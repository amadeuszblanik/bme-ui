import { describe, expect, test } from "@jest/globals";
import { rgbToHex } from "./index";

describe("Utils:: rgb to hex", () => {
  test("0,0,0 should be #000000", () => {
    expect(rgbToHex("rgb(0,0,0)")).toEqual("#000000");
  });

  test("255,255,255 should be #ffffff", () => {
    expect(rgbToHex("rgb(255,255,255)")).toEqual("#ffffff");
  });

  test("0,0,255 should be 0000ff", () => {
    expect(rgbToHex("rgb(0,0,255)")).toEqual("#0000ff");
  });

  test("0,122,255 should be #007aff", () => {
    expect(rgbToHex("rgb(0,122,255)")).toEqual("#007aff");
  });

  test("52,199,89 should be #34c759", () => {
    expect(rgbToHex("rgb(52,199,89)")).toEqual("#34c759");
  });

  test("rgb(0) should throw error", () => {
    try {
      expect(rgbToHex("rgb(0)")).toBeFalsy();
    } catch (error) {
      expect((error as Error).message).toBe("Invalid rgb string");
    }
  });

  test("rgb(0,0) should throw error", () => {
    try {
      expect(rgbToHex("rgb(0,0)")).toBeFalsy();
    } catch (error) {
      expect((error as Error).message).toBe("Invalid rgb string");
    }
  });

  test("rgb(2137,666,666) should throw error", () => {
    try {
      expect(rgbToHex("rgb(2137,666,666)")).toBeFalsy();
    } catch (error) {
      expect((error as Error).message).toBe("Invalid rgb string");
    }
  });

  test("rgb(-2137,-666,-666) should throw error", () => {
    try {
      expect(rgbToHex("rgb(-2137,-666,-666)")).toBeFalsy();
    } catch (error) {
      expect((error as Error).message).toBe("Invalid rgb string");
    }
  });

  test("#XXXXXX should throw error", () => {
    try {
      expect(rgbToHex("#XXXXXX")).toBeFalsy();
    } catch (error) {
      expect((error as Error).message).toBe("Invalid rgb string");
    }
  });

  test("rgba(0,0,0,0) should throw error", () => {
    try {
      expect(rgbToHex("rgba(0,0,0,0)")).toBeFalsy();
    } catch (error) {
      expect((error as Error).message).toBe("Invalid rgb string");
    }
  });
});
