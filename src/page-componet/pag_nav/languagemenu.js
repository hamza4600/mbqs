import styled from "styled-components";
// Flages
import { GB } from "country-flag-icons/react/3x2";
import { FR } from "country-flag-icons/react/3x2";
import { DE } from "country-flag-icons/react/3x2";
import { IT } from "country-flag-icons/react/3x2";
import { SE } from "country-flag-icons/react/3x2";
import { ES } from "country-flag-icons/react/3x2";

const Wrapper = styled.div`
    position: absolute;
    right: 1px;
    width: 333px;
    height: 337px;
    background: #275482;
    top: 42px;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    padding: 32px 0px 0px 23px;
    z-index: 999;
    overflow-y: auto;
    overflow-x: hidden;

    #flags {
        display: inline-flex;
        gap: 20px;
        align-items: center;
        margin-bottom: 7px;
        cursor: pointer;
        background: none;
        border: none;
        color: #fff;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
    }
    .flag {
        width: 28px;
    }
`;

const Flags = [
    {
        id: 1,
        name: "English",
        flag: <GB className="flag" />,
    },
    {
        id: 2,
        name: "French",
        flag: <FR className="flag" />,
    },
    {
        id: 3,
        name: "German",
        flag: <DE className="flag" />,
    },
    {
        id: 4,
        name: "Italian",
        flag: <IT className="flag" />,
    },
    {
        id: 5,
        name: "Spanish",
        flag: <ES className="flag" />,
    },
    {
        id: 6,
        name: "Swedish",
        flag: <SE className="flag" />,
    },
];

const LanguageMenu = () => {
    //  will chnage language in all application

    return (
        <>
            <Wrapper>

                {Flags.map((flag) => (
                    <button key={flag.id} id="flags">
                        {flag.flag}
                        <span>{flag.name}</span>
                    </button>
                ))}

            </Wrapper>
        </>
    );
};

export default LanguageMenu;
