import { useState, useLayoutEffect } from "react";

let visualPort = typeof window !== "undefined" ? window.visualViewport : null;

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  // make user of LayoutEffect

  useLayoutEffect(() => {
   
    let timeout;
    function handleResize() {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 200);
    }

    // Add event listener
    if (!visualPort) {
      window.addEventListener("resize", handleResize);
    } else {
      visualPort.addEventListener("resize", handleResize);
    }
    // Call handler right away so state gets updated with initial window size

    handleResize();
    // Remove event listener on cleanup
    return () => {
      if (!visualPort) {
        window.removeEventListener("resize", handleResize);
      } else {
        visualPort.removeEventListener("resize", handleResize);
      }
    };
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
export default useWindowSize;
