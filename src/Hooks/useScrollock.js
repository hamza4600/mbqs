import { useEffect, useState } from "react";

function useScrollLock(lock, ref) {
    const [locked, setLocked] = useState(false || lock);

    useEffect(() => {
        const body = document.querySelector("body");
        if (locked) {
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "auto";
        }
        return () => {
            body.style.overflow = "auto";
        }
    }, [locked]);

    useEffect(() => {
        const body = document.querySelector("body");
        const handleScroll = (e) => {
            const { scrollTop, scrollHeight, clientHeight } = e.target;
            if (scrollTop + clientHeight >= scrollHeight) {
                setLocked(false);
            }
        }
        ref?.current?.addEventListener("scroll", handleScroll);
        return () => {
            body.style.overflow = "auto";
            // eslint-disable-next-line react-hooks/exhaustive-deps
            ref?.current?.removeEventListener("scroll", handleScroll);
        }
    }, [ref]);

    return [locked, setLocked];

}
export default useScrollLock;

// how to use it
// import useScrollLock from "./useScrollLock";
// import { useRef } from "react";
// const ref = useRef();
// const [locked, setLocked] = useScrollLock(false, ref);
