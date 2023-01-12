import { useState } from "react";

function useDropDown() {
    const [isOpen, setIsOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const [value, setValue] = useState(null);

    const toggle = () => setIsOpen(!isOpen);
    const close = () => setIsOpen(false);
    const open = () => setIsOpen(true);

    const updateValue = (value) => {
        setValue(value);
        close();
    }

    return {
        isOpen,
        options,
        value,
        toggle,
        close,
        open,
        updateValue,
        setOptions,
    };
}

export default useDropDown;