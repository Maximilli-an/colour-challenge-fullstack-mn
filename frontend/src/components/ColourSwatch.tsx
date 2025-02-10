import { useState, useEffect } from "react";
import { fetchColours } from "../api/colourService";
import { Colour } from "../../../backend/src/types/colourTypes"

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
                  backgroundColor:
                    colour.type === "rgb"
                      ? `rgb(${colour.red}, ${colour.green}, ${colour.blue})`
                      : `hsl(${colour.hue}, ${colour.saturation}%, ${colour.lightness}%)`,
                  border: "1px solid black",
                }}
              />
            ))}
          </div>
        </div>
      );
    };
  

    export default ColourSwatch;