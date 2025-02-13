"use client"

import { useState, useEffect } from "react";
import { fetchColours } from "../serviceHandler/colourService";
import { BRGBColour, Colour, HSLColour, RGBColour } from "../../../../backend/src/types/colourTypes"

const colourPreRender: Record<Colour["type"], (colour: RGBColour | HSLColour | BRGBColour) => string> = {
  rgb: (colour) => `rgb(${(colour as RGBColour).red}, ${(colour as RGBColour).green}, ${(colour as RGBColour).blue})`,
  hsl: (colour) => `hsl(${(colour as HSLColour).hue}, ${(colour as HSLColour).saturation}%, ${(colour as HSLColour).lightness}%)`,
  brgb: (colour) => {
    const convert = (value: number) => Math.round((value / 10000) * 255); //this does BGRB to RGB for us
    return `rgb(${convert((colour as BRGBColour).red)}, ${convert((colour as BRGBColour).green)}, ${convert((colour as BRGBColour).blue)})`;
  },
};

const ColourSwatch = () => {
    const [colours, setColours] = useState<Colour[]>([]);
    const [error, setError] = useState<string | null>(null);
  
    const loadColours = async () => {
      try {
        const colourData: Colour[] = await fetchColours();
        setColours(colourData);
        setError(null);
      } catch (err) {
        setError("Could not fetch colours.");
      }
    };
  
    useEffect(() => {
      loadColours();
    }, []);

    return (
        <div>
          <button onClick={loadColours}>Click Here For Colours</button>
          {error && <p>{error}</p>}
          <div style={{ display: "flex", gap: "10px" }}>
            {colours.map((colour, index) => (
              <div
                key={index}
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: colourPreRender[colour.type]?.(colour as RGBColour | HSLColour | BRGBColour) || "transparent",
                  border: "1px solid black",
                }}
              />
            ))}
          </div>
        </div>
      );
    };
  

    export default ColourSwatch;