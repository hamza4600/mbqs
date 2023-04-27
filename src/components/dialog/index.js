import Portal from "components/portal";
import useScrollLock from "Hooks/useScrollock";
import { forwardRef, memo, useCallback, useEffect, useMemo } from "react";
import styled from "styled-components";

const DialOuter = styled.div`
    position : ${props => props.type === "logout" ? "fixed" : "absolute"};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color : ${props => props.type === "logout" ? "rgba(34, 34, 34, 0.38)" : "rgba(0, 0, 0, 0.6)"};
    z-index : ${props => props.type === "logout" ? "9999" : "100"};
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    #delete {
        width: 700px;
        height: 360px;
    }

    #delete h2 {
        font-size: 30px;
        font-weight: 500;
    }

    #reason {
        width: 100%;
        height: 180px;
        padding: 6px;
        margin: 18px 0;
        outline: none;
        border: none;
        border-radius: 3px;
        background-color: #B8BFC4;
        font-size: 16px;    
        font-weight: 200;
        resize: none;
    }
    #reason::placeholder {
        color: #000000;
    }

    #delete button {
        background: #D9D9D9;
    }

    // for logout
    #logout {
        width: 697px;
        height: 358px;
        padding: 35px 40px;
        margin-bottom: 6rem;
    }

    #logout h2 {
        font-size: 18px;
        font-weight: 400;
        text-align: center;
    }
    
    #logout button:first-child {
        padding: 7px 42px;
        width: 155px;
        color: #1A496E;
    }

    #logout textarea {
        width: 615px;
        height: 154px;
        padding: 10px 14px;
        margin-top: 18px;
        background: #B8BFC4;
        border-radius: 3px;
        outline: none;
        border: none;
        font-size: 16px;
        // not allowed to resize
        resize: none;
    }

    #logout textarea::placeholder {
        color: #000000;
    }

    #dialog_footer {
        width: unset !important;; 
    }

    @media (max-width: 768px) {
        #delete {
            width: 90%;
            height: 326px;
        }

        #delete h2 {
            font-size: 16px;
            font-weight: 300;
        }
        #logout {
            width: 90%;
            height: 60%;
            margin-bottom: 0px;
        }
        #logout h2 {
            font-size: 16px;
        }
        #logout textarea {
            width: 100%;
            height: 154px;
        }
        #dialog {
            width: 100%;
        }
    }
`;


const DialInner = styled.div`
    background-color: #204D70;
    color: #fff;
    border-radius: 3px;
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
        padding: 8px 16px;
        border-radius: 2px;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 18px;
    }

    @media (max-width: 768px) {
        #dialog_footer {
            width: 72%;
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
            id = 'dialog',
            description,
            type,
            conformText = 'Confirm',
            cancelText = 'Cancel',
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
                case 'logout':
                    return 'logout';
                default:
                    return 'confirm';
            }
        }, [type]);

        return (
            <>
                {open && (
                    <Portal
                        id="dialog"
                    >
                        <DialOuter
                            ref={ref}
                            role="dialog"
                            tabIndex={-1}
                            id={id}
                            onClick={closeOutside && onClose}
                            backdrop={backdrop}
                            type = {type}
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
                                    <button onClick={onConfirm}>{conformText}</button>
                                    {cancelText !== 'none' &&
                                        <button onClick={open && onClose}>{cancelText}</button>
                                    }
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