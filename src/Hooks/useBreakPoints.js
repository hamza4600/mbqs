// Making a Break point System  for  React

import React from "react";

const value = {
  xs: 500,
  sm: 600,
  md: 800,
  lg: 1200,
  xl: 1500,
};
//
// if (breakpoint.xs) {}
// if value of window size matches with any value or is in range of any value then it will return true for that value and fasle for other values
//

function useBreakpoint() {
  const [breakpoint, setBreakpoint] = React.useState({
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
  });

  React.useLayoutEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const breakpoint = {
        xs: width < value.xs,
        sm: width >= value.xs && width < value.sm,
        md: width >= value.sm && width < value.md,
        lg: width >= value.md && width < value.lg,
        xl: width >= value.lg,
      };
      setBreakpoint(breakpoint);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return breakpoint;
}

export default useBreakpoint;
