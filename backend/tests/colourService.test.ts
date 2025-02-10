import { describe, it, expect } from "bun:test";
import { getRandomRGB, getRandomHSL, getRandomColour, getRandomColourSwatch } from "../src/services/colourService";

describe("Colour Service", () => {
  it("generates a valid RGB colour", () => {
    const colour = getRandomRGB();
    expect(colour.type).toBe("rgb");
    expect(colour.red).toBeGreaterThanOrEqual(0);
    expect(colour.red).toBeLessThanOrEqual(255);
    expect(colour.green).toBeGreaterThanOrEqual(0);
    expect(colour.green).toBeLessThanOrEqual(255);
    expect(colour.blue).toBeGreaterThanOrEqual(0);
    expect(colour.blue).toBeLessThanOrEqual(255);
  });

  it("generates a valid HSL colour", () => {
    const colour = getRandomHSL();
    expect(colour.type).toBe("hsl");
    expect(colour.hue).toBeGreaterThanOrEqual(0);
    expect(colour.hue).toBeLessThanOrEqual(360);
    expect(colour.saturation).toBeGreaterThanOrEqual(0);
    expect(colour.saturation).toBeLessThanOrEqual(100);
    expect(colour.lightness).toBeGreaterThanOrEqual(0);
    expect(colour.lightness).toBeLessThanOrEqual(100);
  });

  it("retursn a random colour of either RGB or HSL", () => {
    const colour = getRandomColour();
    expect(["rgb", "hsl"]).toContain(colour.type);
  });

  it("generates a colour swatch of 5 colours", () => {
    const swatch = getRandomColourSwatch();
    expect(swatch.length).toBe(5);
    swatch.forEach((colour) => {
      expect(["rgb", "hsl"]).toContain(colour.type);
    });
  });
});
