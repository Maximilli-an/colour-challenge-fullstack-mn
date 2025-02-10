import { useState, useEffect } from "react";

const ColourSwatch = () => {
    const [colours, setColours] = useState([]);
    const [error, setError] = useState<string | null>(null);
  
    const loadColours = async () => {
      try {
        const data = await fetchColours(); // TODO Max - init fetchColours as a service call to the api itself
        setColours(data);
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
          <button onClick={loadColours}>Refresh Colours</button>
          {error && <p>{error}</p>}
          <div style={{ display: "flex", gap: "10px" }}>
            {colours.map((colour, index) => (
              <div
                key={index}
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: // Todo Max - will this work like this? Need to remember to do BRGB AS WELL
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