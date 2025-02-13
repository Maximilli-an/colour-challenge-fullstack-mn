export interface RGBColour {
    type: "rgb";
    red: number;
    green: number;
    blue: number;
  }
  
  export interface HSLColour {
    type: "hsl";
    hue: number;
    saturation: number;
    lightness: number;
  }

    export interface BRGBColour {
    type: "brgb";
    red: number;
    green: number;
    blue: number;
  }
  
  export type Colour = RGBColour | HSLColour | BRGBColour;