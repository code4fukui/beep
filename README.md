# beep

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A simple beeping sound library for the web.

## Demo
https://code4fukui.github.io/beep/

## Features
- Generates a beep sound using the Web Audio API
- Allows controlling the frequency, duration, and volume of the beep
- Provides functions to play a single beep or a sequence of beeps

## Usage
To use the `beep` library, import the `beep` function from the `beep.js` file:

```javascript
import { beep } from "https://code4fukui.github.io/beep/beep.js";
```

Then, you can call the `beep` function to play a beep:

```javascript
beep(440, 0.5, 0.5); // Play a beep at 440 Hz, 0.5 seconds duration, and 0.5 volume
```

You can also use the provided buttons in the demo to play various beeps.

## License
This project is licensed under the MIT License.