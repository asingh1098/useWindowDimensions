# useWindowDimensions

A React hook to get window dimensions and detect mobile width

## Usage

```typescript
import React from "react";
import { useWindowDimensions } from "use-window-dimensions";

const WindowInfo = () => {
  const { windowDimensions, isMobileWidth } = useWindowDimensions();

  return (
    <div>
      <h1>Window Dimensions</h1>
      <p>Width: {windowDimensions.width}px</p>
      <p>Height: {windowDimensions.height}px</p>
      <p>Is Mobile Width: {isMobileWidth ? "Yes" : "No"}</p>
    </div>
  );
};

export default WindowInfo;
```
