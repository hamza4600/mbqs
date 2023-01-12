import Portal from "components/portal";
import useScrollLock from "Hooks/useScrollock";
import { forwardRef, memo, useCallback, useEffect, useMemo } from "react";
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
    background-color: #204D70;
    color: #fff;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
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

    #dialog_footer {
        display: inline-flex;
        justify-content: space-between;
        width: 50%;
    }

    #dialog_footer button {
        width: 100%;
        margin: 0 10px;
        padding: 8px 20px;
        border-radius: 5px;
        border: none;
        outline: none;
        cursor: pointer;
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
            id = 'dialog',
            description,
            type,

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

        const handelType = useMemo((e) => {
            switch (type) {
                case 'confirm':
                    return 'confirm';
                case 'cancel':
                    return 'cancel';
                case 'delete':
                    return 'delete';
                default:
                    return 'confirm';
            }
        }, [type]);

        console.log('handelType', handelType);
        return (
            <>
                {open && (
                    <Portal
                        id="dialog"
                    >
                        <DialOuter
                            ref={ref}
                            role="dialog"
                            id={id}
                            onClick={closeOutside && onClose}
                            backdrop={backdrop}
                        >
                            <DialInner
                                id={handelType}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div id={id} >
                                    <h2>{title}</h2>
                                    {children && children}
                                    {description && <p>{description}</p>}
                                </div>
                             
                                <div id="dialog_footer">
                                    <button onClick={onConfirm}>Confirm</button>
                                    <button onClick={open && onClose}>Cancel</button>
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