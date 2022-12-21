import Portal from "components/portal";
import useScrollLock from "Hooks/useScrollock";
import { forwardRef, memo, useCallback, useEffect } from "react";
import styled from "styled-components";

const DialOuter = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);    
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    `;
const DialInner = styled.div`
    width: 400px;
    height: 400px;
    background-color: skyblue;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    animation: open 0.2s ease-in-out;
     

    @keyframes open {
        from {
            transform: scale(0.8);
            opacity: 0;
        }
        to {
            transform: scale(1);
            opacity: 1;
        }
    }
`;

const DialogBox = memo(forwardRef(
    ({ children, ...props }, ref) => {
        const {
            open,
            title,
            onClose,
            onConfirm,
            escClose = true,
            closeOutside = true,
            scrollLock = true,
            backdrop = true,
            id = 'dialog'
        } = props;

        const [, setLocked] = useScrollLock(false || scrollLock, ref);

        // if Model Open then lock the scroll
        useEffect(() => {
            if (open === undefined) return;

            if (scrollLock && open) {
                setLocked(true);
            } else {
                setLocked(false);
            }
            return () => {
                setLocked(false);
            }
        }, [scrollLock, setLocked, open]);


        const handleKeyDown = useCallback((e) => {
            if (escClose && e.key === 'Escape') {
                onClose();
            }
        }, [escClose, onClose]);

        useEffect(() => {
            if (escClose) {
                document.addEventListener('keydown', handleKeyDown);
            }
            return () => {
                document.removeEventListener('keydown', handleKeyDown);
            }
        }, [escClose, handleKeyDown]);

        return (
            <>
                {open && (
                    <Portal
                        id="dialog"
                    >
                        <DialOuter
                            ref={ref}
                            role="dialog" id={id}
                            onClick={closeOutside && onClose}
                            backdrop={backdrop}
                        >
                            <DialInner id={id}
                                onClick={(e) => e.stopPropagation()}
                            >
                                {title && <h2>{title}</h2>}
                                <div id={id} >
                                    {children}
                                </div>
                                <div id="dialog_footer">
                                    <button onClick={open && onClose}>Cancel</button>

                                    <button onClick={onConfirm}>Confirm</button>
                                </div>
                            </DialInner>
                        </DialOuter>
                    </Portal>
                )}
            </>
        );
    }
))

export default DialogBox;