import { Colour } from "../../../../backend/src/types/colourTypes"

export const fetchColours = async (): Promise<Colour[]> => {
    const response: Response = await fetch("/api/colours");
    if (!response.ok) throw new Error("Failed to fetch colours");
    const colourData: Colour[] = await response.json();
    return colourData;
  };