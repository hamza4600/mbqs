import styled from "styled-components";


function Anch(props) {
    const {
        color,
        onClick,
        href,
        children,
} = props

if (onClick) {
    return (
        <>
            <div
                onClick={onClick}
                color={color}
            >
                {children}
            </div>
        </>
    )
}

return (
    <>
        <a
            href={href}
            color={color}
        >
            {children}
        </a>
    </>
)
}

const Anchor = styled(Anch)`
    color : ${(props) => props.color ? props.color : 'white'};
    text-decoration: none;
    font-size: 13px !important;
    font-weight: lighter;
    cursor: pointer;
    padding: 2px 0px;

    ${props => props.showStyle && `
        color: green;
        margin-bottom: 4px;
    `}

`;

export default Anchor;


export const H1 = styled.h1` // in All pages Header
    font-size: 20px;
    font-weight: 200 !important;
    color: ${({ theme }) => theme.pageText};
    margin-bottom: 20px;
    `;



