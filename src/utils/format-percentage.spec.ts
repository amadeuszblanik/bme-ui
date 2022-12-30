/* eslint-disable no-magic-numbers */
import { describe, expect, test } from "@jest/globals";
import { formatPercentage } from "./index";

describe("Utils:: format percentage", () => {
  test("1 should return 100%", () => {
    expect(formatPercentage(1)).toEqual("100%");
  });

  test("0.5 should return 50%", () => {
    expect(formatPercentage(0.5)).toEqual("50%");
  });

  test("5 should return 500%", () => {
    expect(formatPercentage(5)).toEqual("500%");
  });

  test("0 should return 0%", () => {
    expect(formatPercentage(0)).toEqual("0%");
  });

  test("-1 should return -100%", () => {
    expect(formatPercentage(-1)).toEqual("-100%");
  });

  test("-0.5 should return -50%", () => {
    expect(formatPercentage(-0.5)).toEqual("-50%");
  });

  test("-5 should return -500%", () => {
    expect(formatPercentage(-5)).toEqual("-500%");
  });

  test("0.123456789 should return 12.35%", () => {
    expect(formatPercentage(0.123456789)).toEqual("12.35%");
  });

  test("NaN should return 0%", () => {
    expect(formatPercentage(NaN)).toEqual("NaN%");
  });

  test("undefined should return 0%", () => {
    // Test just in case someone passes undefined to the function
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(formatPercentage(undefined)).toEqual("NaN%");
  });

  test("null should return 0%", () => {
    // Test just in case someone passes null to the function
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(formatPercentage(null)).toEqual("NaN%");
  });
});
