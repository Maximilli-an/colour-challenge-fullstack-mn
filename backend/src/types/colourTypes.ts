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
  
  export type Colour = RGBColour | HSLColour;
  

//   For extension request
//   export interface BRGBColour {
//     type: "brgb";
//     red: number;
//     green: number;
//     blue: number;
//   }
// add BRGB to export type, and logic to colourService