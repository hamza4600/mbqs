// if click outside of a componet Hide the clikdern 
import { useRef, useEffect, useState, useCallback } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlert() {
  const ref = useRef(null);
  const [ state , setState] =useState(false);
  
  const options = {
      on: useCallback(() => setState(true), []),
      off : useCallback(() => setState(false), []),
      toggle: useCallback(() => setState(!state), [state]),
  }
    useEffect(() => {
    //   false state if clicked on outside of element
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        options.off();
      }
    }
    // Bind the event listener
    document.addEventListener("click", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref]);

  return [ref , state , options]
  
}

export default useOutsideAlert;