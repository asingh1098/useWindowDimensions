import { useEffect, useState } from "react";

type WindowDimensions = {
  width: number;
  height: number;
};

const getWindowDimensions = (): WindowDimensions => {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

type WindowDimensionsResult = {
  windowDimensions: WindowDimensions;
  isMobileWidth: boolean;
};

/**
 * A hook that provides the current window dimensions and a mobile width flag.
 *
 * This hook returns an object containing the current window dimensions (`width` and `height`)
 * and a boolean (`isMobileWidth`) that indicates if the window width is less than or equal to 640 pixels.
 * The hook listens for window resize events and updates the dimensions in real-time.
 *
 * @returns {WindowDimensionsResult} An object containing:
 *   - `windowDimensions`: The current width and height of the window.
 *   - `isMobileWidth`: A boolean indicating if the window width is ≤ 640px.
 *
 * @example
 * const { windowDimensions, isMobileWidth } = useWindowDimensions();
 * console.log(windowDimensions.width, windowDimensions.height);
 * console.log(isMobileWidth ? "Mobile view" : "Desktop view");
 */
const useWindowDimensions = (): WindowDimensionsResult => {
  const initialWindowDimensions: WindowDimensions = getWindowDimensions();
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>(
    initialWindowDimensions
  );

  const isMobileWidth: boolean = windowDimensions.width <= 640;

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowDimensions(getWindowDimensions);
    });

    return window.removeEventListener("resize", () => {
      setWindowDimensions(getWindowDimensions);
    });
  }, []);

  return { windowDimensions, isMobileWidth };
};

export { useWindowDimensions };

export type { WindowDimensions, WindowDimensionsResult };
