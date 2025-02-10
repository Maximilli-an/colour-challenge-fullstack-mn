import type { RGBColour, HSLColour, Colour } from "../types/colourTypes";

export const getRandomRGB = (): RGBColour => ({
  type: "rgb",
  red: Math.floor(Math.random() * 256),
  green: Math.floor(Math.random() * 256),
  blue: Math.floor(Math.random() * 256),
});

export const getRandomHSL = (): HSLColour => ({
  type: "hsl",
  hue: Math.floor(Math.random() * 361),
  saturation: Math.floor(Math.random() * 101),
  lightness: Math.floor(Math.random() * 101),
});

//add BGRB here for extension

export const getRandomColour = (): Colour => {
  const generators = [getRandomRGB, getRandomHSL];
  return generators[Math.floor(Math.random() * generators.length)]();
};

//swatch generates 5 random colours that are unrelated - extension potential to make relatable colours
export const getRandomColourSwatch = (): Colour[] =>
  Array.from({ length: 5 }, getRandomColour);