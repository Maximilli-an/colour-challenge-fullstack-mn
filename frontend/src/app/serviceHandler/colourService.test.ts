import { expect, jest, test } from "@jest/globals";
import { fetchColours } from "./colourService";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve([
        { type: "rgb", red: 255, green: 0, blue: 0 },
        { type: "hsl", hue: 120, saturation: 100, lightness: 50 },
        { type: "brgb", red: 10000, green: 5000, blue: 7500 }, // Extension type
        { type: "rgb", red: 0, green: 255, blue: 255 },
        { type: "hsl", hue: 300, saturation: 50, lightness: 40 }
      ]),
  } as Response)
) as jest.MockedFunction<typeof fetch>;

//custom validators based on ColourTypes
const colourValidators: Record<string, (colour: any) => boolean> = {
  rgb: (colour) => "red" in colour && "green" in colour && "blue" in colour,
  hsl: (colour) => "hue" in colour && "saturation" in colour && "lightness" in colour,
  brgb: (colour) => "red" in colour && "green" in colour && "blue" in colour, //Extension
};

//happy path
test("fetchColours should return an array of 5 colours with valid types", async () => {
  const colours = await fetchColours();

  expect(colours).toHaveLength(5); // currently 5, if we made this dynamic this would need to be updated

  colours.forEach((colour) => {
    expect(colour).toHaveProperty("type");
    expect(colourValidators[colour.type]).toBeDefined(); 
    expect(colourValidators[colour.type](colour)).toBe(true);
})
});

//bad path
test("fetchColours should throw an error when API fails", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        status: Math.floor(Math.random() * 500) + 400, // kept this one random between 4-500 untill we know expected behaviour of the api longer term.
        statusText: "Server Error",
        json: () => Promise.resolve({ error: "Unexpected error occurred" }),
      } as Response)
    ) as jest.MockedFunction<typeof fetch>;
  
    await expect(fetchColours()).rejects.toThrow("Failed to fetch colours");
  });