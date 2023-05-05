import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
    width: 100%;
    grid-gap: 8px;
    align-items: center;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        align-items: center;
    }
`;

export const Lwrap = styled.div`
    background: #fff;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        display: none;
    }
`;

export const Rwrap = styled.div`
    width: 300px;
    position: relative;
    margin-left: 20px;

    @media (max-width: 768px) {
        width: 100%;
        margin-left: 20px;
        bottom: 6rem;
    }
`;

export const Item = styled.div`
    text-transform: capitalize;
    font-size: 14px;

    &:hover {
        cursor: pointer;
        color: #fff;
        background: #1b6ca8;
    }
`;

export const LoginModelWrapper = styled.div`
    color: #c2bebe;
    font-size: 12px;
    #row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 10px;
        width: 90%;
    }

    #row button {
        background: none;
        border: none;
        color: #c2bebe;
        font-size: 10px;
        font-weight: 500;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        #row {
            width: 90%;
        }
    }
`;

export const RegesterWrapper = styled.div`
    font-size: 12px !important;

    input {
        margin: 3px 0 !important;
    }

    #small-modal {
        max-height: 430px !important;
    }
    
    #employname {
        text-transform: ${(props) => (props.cpait ? "capitalize" : "none")};
    }

    @media (max-width: 768px) {
        margin-top: -50px;
    }
`;

export const Head = styled.h1`
    font-size: ${(props) => (props.size ? props.size : "18px")};
    font-weight: 300;
    margin-bottom: 20px;
    display: flex;
    justify-content: ${(props) => (props.justify ? props.justify : "center")};
    align-items: center;
    color: #c2bebe;
    text-transform: ${(props) => (props.capi ? "capitalize" : "none")};

    @media (max-width: 768px) {
        margin-right: 60px;
    }
`;

// dot Shuttle Animation

const Anime = styled.div`
    .dot-shuttle {
        position: relative;
        // left: -1 5px;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        background-color: #c8cacb;
        color: transparent;
        margin: -1px 0;
    }
    .dot-shuttle::before,
    .dot-shuttle::after {
        content: "";
        display: inline-block;
        position: absolute;
        top: 0;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        background-color: #c8cacb;
        color: transparent;
    }
    .dot-shuttle::before {
        left: 45px;
        animation: dot-shuttle 2s infinite ease-out;
    }
    .dot-shuttle::after {
        left: 90px;
    }

    @keyframes dot-shuttle {
        0%,
        50%,
        100% {
            transform: translateX(0);
        }
        25% {
            transform: translateX(-120px);
        }
        75% {
            transform: translateX(120px);
        }
    }

    .filter-contrast {
        width: 100%;
        position: relative;
        left: 5rem;
    }
`;

export const DotShuttler = () => (
    <>
        <Anime className="col-3">
            <div className="snippet" data-title="dot-shuttle">
                <div className="stage filter-contrast">
                    <div className="dot-shuttle"></div>
                </div>
            </div>
        </Anime>
    </>
);
