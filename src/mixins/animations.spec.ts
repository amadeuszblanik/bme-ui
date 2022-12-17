import { describe, expect, test } from "@jest/globals";
import { animations } from "./index";

describe("Mixin:: animations", () => {
  test("empty should not return css", () => {
    const results = animations([]);

    expect(results).toBeFalsy();
    expect(results).not.toBeUndefined();
    expect(results).not.toBeNull();
    expect(results).toBe("");
    expect(results).not.toBe("undefined");
    expect(results).not.toBe("null");
  });

  test("background should return css", () => {
    const results = animations(["background"]);

    const containsProperties = ["background", "transition"].every((property) => String(results).includes(property));

    expect(results).toBeTruthy();
    expect(results).not.toBeUndefined();
    expect(results).not.toBeNull();
    expect(containsProperties).toBeTruthy();
  });

  test("background and color should return css", () => {
    const results = animations(["background", "color"]);
    const containsProperties = ["background", "color", "transition"].every((property) =>
      String(results).includes(property),
    );

    expect(results).toBeTruthy();
    expect(results).not.toBeUndefined();
    expect(results).not.toBeNull();
    expect(containsProperties).toBeTruthy();
  });

  test("background and color and time should return css", () => {
    const time = 450;
    const results = animations(["background", "color"], time);
    const containsProperties = ["background", "color", "transition"].every((property) =>
      String(results).includes(property),
    );
    const containsTime = [String(time), "ms"].every((property) => String(results).includes(property));

    expect(results).toBeTruthy();
    expect(results).not.toBeUndefined();
    expect(results).not.toBeNull();
    expect(containsProperties).toBeTruthy();

    expect(containsTime).toBeTruthy();
  });
});
