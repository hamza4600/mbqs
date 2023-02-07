// Making a Break point System  for  React

import React from "react";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const value = {
  xs: 500,
  sm: 600,
  md: 800,
  lg: 1200,
  xl: 1500,
  xxl: 1800,
};

const initaiValue = {
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false,
  xxl: false,
}

function useBreakpoint() {

  const [breakpoint, setBreakpoint] = React.useReducer(
    (state, newState) => ( { ...state, ...newState } ), initaiValue);
    
  React.useLayoutEffect(() => {

    const result = async () => {
      await sleep(1000).then(() => {
        const width = window.innerWidth;
        const breakpoint = {
          xs: width < value.xs,
          sm: width >= value.xs && width < value.sm,
          md: width >= value.sm && width < value.md,
          lg: width >= value.md && width < value.lg,
          xl: width >= value.lg && width < value.xl,
          xxl: width >= value.xl,
        };
        setBreakpoint(breakpoint);
      })
    }
    // also run it once on mount
    result();
      
    window.addEventListener("resize", result);
    return () => window.removeEventListener("resize", result);

  }, []);
  return breakpoint;
}

export default useBreakpoint;
