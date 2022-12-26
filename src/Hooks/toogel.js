//  on Toggle chnage state

import { useCallback, useState } from "react";

export const useToggelDropDown = ({ initialState = false }) => {
    const [state, setState] = useState(initialState);

    const toggle = useCallback(() => setState(!state), [state]);
    const on = useCallback(() => setState(true), []);
    const off = useCallback(() => setState(false), []);
    const options = {
        on: on,
        off: off,
        toggle: toggle,
    }

    return [state, options];
}
