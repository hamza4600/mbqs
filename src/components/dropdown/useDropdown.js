import { useState } from "react";

function useDropDown() {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(null);
    const [selectIndex, setSelectIndex] = useState(null);
    const [options, setOptions] = useState([]);
    const [value, setValue] = useState(null);
    const [dialogProps, setDialogProps] = useState({});

    const toggle = () => setIsOpen(!isOpen);
    const close = () => setIsOpen(false);
    const open = () => setIsOpen(true);

    const selectItem = (option, index) => {
        setSelected(option);
        setSelectIndex(index);
        close();
    }

    const updateValue = (value) => {
        setValue(value);
    }

    return {
        isOpen,
        selected,
        selectIndex,
        options,
        value,
        dialogProps,
        toggle,
        close,
        open,
        selectItem,
        updateValue,
        setOptions,
        setDialogProps
    };
}

export default useDropDown;

//
