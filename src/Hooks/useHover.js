import React from "react";
import useWindowSize from "./useViewport";

const useHover = () => {
  const [isHovering, setIsHovering] = React.useState(false);
  //  if device width is smaller than 900px than hover should not work
  const size = useWindowSize();
  const width = size.width;

  const handleMouseOver = React.useCallback(() => {
    if (width >= 900) {
      setIsHovering(true);
    }
  }, [width]);
  const handleMouseOut = React.useCallback(() => {
    if (width >= 900) {
      setIsHovering(false);
    }
  }, [width]);

  const nodeRef = React.useRef();

  const callbackRef = React.useCallback(
    (node) => {
      if (nodeRef.current) {
        nodeRef.current.removeEventListener("mouseover", handleMouseOver);
        nodeRef.current.removeEventListener("mouseout", handleMouseOut);
      }

      nodeRef.current = node;

      if (nodeRef.current) {
        nodeRef.current.addEventListener("mouseover", handleMouseOver);
        nodeRef.current.addEventListener("mouseout", handleMouseOut);
      }
    },
    [handleMouseOver, handleMouseOut]
  );

  return [callbackRef, isHovering];
};

export default useHover;
