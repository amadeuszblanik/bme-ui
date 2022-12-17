import { describe, expect, test } from "@jest/globals";
import { isDark } from "./index";

describe("Mixin:: is dark", () => {
  test("#000 should be true", () => {
    expect(isDark("#000")).toBe(true);
  });

  test("#000000 should be true", () => {
    expect(isDark("#000000")).toBe(true);
  });

  test("#fff should be false", () => {
    expect(isDark("#fff")).toBe(false);
  });

  test("#ffffff should be false", () => {
    expect(isDark("#ffffff")).toBe(false);
  });

  test("#00f should be true", () => {
    expect(isDark("#00f")).toBe(true);
  });

  test("#007aff should be true", () => {
    expect(isDark("#007aff")).toBe(true);
  });

  test("#34c759 should be true", () => {
    expect(isDark("#34c759")).toBe(true);
  });

  test("#XXX should throw error", () => {
    try {
      expect(isDark("#XXX")).toBe(null);
    } catch (error) {
      expect((error as Error).message).toBe("Invalid hex string");
    }
  });

  test("#XXXXXX should throw error", () => {
    try {
      expect(isDark("#XXXXXX")).toBe(null);
    } catch (error) {
      expect((error as Error).message).toBe("Invalid hex string");
    }
  });
});
