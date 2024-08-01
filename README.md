# canvaz_api

Getting Spotify Canvas for track by its ID

> [!WARNING]  
> This project is probably against Spotify TOS. Use at your own risks.

### Install
```bash
npm i canvaz_api
```

### Example
```ts
import { get_canvas_for_track } from "canvaz_api"
let a = await get_canvas_for_track("4x3vJJYSW9fZWIubv5mmww")
console.log(a)
```