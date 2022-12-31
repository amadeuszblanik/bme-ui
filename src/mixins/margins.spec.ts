import { describe, expect, test } from "@jest/globals";
import { margins } from "./index";

describe("Mixin:: margins", () => {
  test("empty should not return css", () => {
    const results = margins("");

    expect(results).toBeFalsy();
    expect(results).not.toBeUndefined();
    expect(results).not.toBeNull();
    expect(results).toBe("");
    expect(results).not.toBe("undefined");
    expect(results).not.toBe("null");
  });

  test("undefined should not return css", () => {
    const results = margins(undefined);

    expect(results).toBeFalsy();
    expect(results).not.toBeUndefined();
    expect(results).not.toBeNull();
    expect(results).toBe("");
    expect(results).not.toBe("undefined");
    expect(results).not.toBe("null");
  });

  test("null should not return css", () => {
    const results = margins(null);

    expect(results).toBeFalsy();
    expect(results).not.toBeUndefined();
    expect(results).not.toBeNull();
    expect(results).toBe("");
    expect(results).not.toBe("undefined");
    expect(results).not.toBe("null");
  });

  test("not allowed values should throw error", () => {
    try {
      const results = margins("all|small");

      expect(results).toBe("NOT_ALLOWED");
    } catch (error) {
      expect((error as Error).message).toBe(
        "Invalid margin value. Every value should be one of following: auto, no, xs, sm, md, lg, xl, xxl",
      );
    }
  });

  test("too many values should throw error", () => {
    try {
      const results = margins("xs|sm|md|lg|xl|xxl|xxl");

      expect(results).toBe("NOT_ALLOWED");
    } catch (error) {
      expect((error as Error).message).toBe("Too many values for margin");
    }
  });

  // @TODO: Refactor all tests be
  test("xs values should be array", () => {
    const results = margins("xs");

    expect(Array.isArray(results)).toBeTruthy();
  });

  test("xs|sm values should be array", () => {
    const results = margins("xs|sm");

    expect(Array.isArray(results)).toBeTruthy();
  });

  test("xs|sm|md values should be array", () => {
    const results = margins("xs|sm|md");

    expect(Array.isArray(results)).toBeTruthy();
  });

  test("xs|sm|md|lg values should be array", () => {
    const results = margins("xs|sm|md|lg");

    expect(Array.isArray(results)).toBeTruthy();
  });
});
