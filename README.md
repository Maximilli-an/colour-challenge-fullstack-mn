Hi I'm Max and i'll be cracking out the colour swatch challenge over this weekend.

I'll be doing my best to do everything by a consistent commit history, to show my thinking and approaches, considerations and tradeoffs, as well as any evolutions made to the overall structure.

Most of that will be documented here, with the final README fitting a more traditional README at the end.

Backend is my stronger side so i'll be starting here.

Initially on reading the challenge I had a number of thoughts, more specifically with the data and type strength, String Literals vs Enums.

My professional experience initially makes me think to tackle this in an OOP themed approach, i'm considering a Class Factory pattern service for colour result generation

However if I wanted to be more Functional and idiomatic with what the front end is likely to look like, modular and lightweight vs scalability

Need to handle cases where theres an unsupported

Initial thoughts on Colour Interface potentially somehting like:
interface RGBColour {
  type: "rgb";
  red: number;
  green: number;
  blue: number;
}

type Colour = RGBColour | HSLColour | future colours here

Wrote this at 2am on a good brainwave 

Remembered a discussion about Bun > Node with Kanopi - will be attempting to use bun for the first time in this challenge. Did some background learning in the interim to familiarise myself

Initial commit will be my Class based approach first, going to do a little legwork from here to see about functions > class based

While switching my class to functions I was thinking about if we should make relationsional colours for a traditional 'paint colour' kind of swatch, there we randomise 1 colour and then provide two lighter and 2 darker shades instead of 5 random colours

Taking a break here

Further considerations, do we want to generate colours that are of the same type in an array? or always mix and match?

Adjusted base url and invalid url inputs for the server path

Keen to build some basic tests for generating colour types - I haven't used bun before but docs suggest bun:test can do this and i'd like to give it a whirl

Once combined all resources to single repo - moving to frontend after a short break

Frontend side - component and api interaction sorted

Had some any typing related errors (so fair TS you right) tied Colour type from backend over to frontend for better JSON Parsing / validation of type recieved

at this point the word Colour is starting to look strange to me.

Stopping for tonight, next step is writing tests for the frontend, double checking Type strength on the backend, add BGRB, styling for FE, etc.

Did some testing after I "stopped" - realised I was having CORS problems.
Decided instead of taking the easy way out with proxies since I havent used Vite any more than Next - i'd switch to Next since the old GET formula for API calls is similar to what i've done in other HTTP Web Frameworks

Teething pain with api/routing and naming conventions in next, but using /api/colours with a route.ts is kinda cool - I do wish it could be a little more 'decoupled' than this, but overall once i learnt this, everything was fixed quickly.