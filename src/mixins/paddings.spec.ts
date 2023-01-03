import { describe, expect, test } from "@jest/globals";
import theme from "../settings/theme";
import { paddings } from "./index";

describe("Mixin:: paddings", () => {
  test("empty should not return css", () => {
    const results = paddings("", theme);

    expect(results).toBeFalsy();
    expect(results).not.toBeUndefined();
    expect(results).not.toBeNull();
    expect(results).toBe("");
    expect(results).not.toBe("undefined");
    expect(results).not.toBe("null");
  });

  test("undefined should not return css", () => {
    const results = paddings(undefined, theme);

    expect(results).toBeFalsy();
    expect(results).not.toBeUndefined();
    expect(results).not.toBeNull();
    expect(results).toBe("");
    expect(results).not.toBe("undefined");
    expect(results).not.toBe("null");
  });

  test("null should not return css", () => {
    const results = paddings(null, theme);

    expect(results).toBeFalsy();
    expect(results).not.toBeUndefined();
    expect(results).not.toBeNull();
    expect(results).toBe("");
    expect(results).not.toBe("undefined");
    expect(results).not.toBe("null");
  });

  test("not allowed values should throw error", () => {
    try {
      const results = paddings("all|small", theme);

      expect(results).toBe("NOT_ALLOWED");
    } catch (error) {
      expect((error as Error).message).toBe(
        "Invalid padding value. Every value should be one of following: auto, no, xs, sm, md, lg, xl, xxl",
      );
    }
  });

  test("too many values should throw error", () => {
    try {
      const results = paddings("xs|sm|md|lg|xl|xxl|xxl", theme);

      expect(results).toBe("NOT_ALLOWED");
    } catch (error) {
      expect((error as Error).message).toBe("Too many values for padding");
    }
  });

  // @TODO: Refactor all tests be
  test("xs values should be array", () => {
    const results = paddings("xs", theme);

    expect(Array.isArray(results)).toBeTruthy();
  });

  test("xs|sm values should be array", () => {
    const results = paddings("xs|sm", theme);

    expect(Array.isArray(results)).toBeTruthy();
  });

  test("xs|sm|md values should be array", () => {
    const results = paddings("xs|sm|md", theme);

    expect(Array.isArray(results)).toBeTruthy();
  });

  test("xs|sm|md|lg values should be array", () => {
    const results = paddings("xs|sm|md|lg", theme);

    expect(Array.isArray(results)).toBeTruthy();
  });
});
