import { Colour } from "../../../backend/src/types/colourTypes";

export const fetchColours = async (): Promise<Colour[]> => {
    const response: Response = await fetch("http://localhost:3000/colours");
    if (!response.ok) throw new Error("You cannot fetch colours at this time, please try again later");
    const colourData: Colour[] = await response.json();
    return colourData;
  };