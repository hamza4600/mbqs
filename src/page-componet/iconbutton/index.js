import add from "./add.svg"
import remove from "./delet.svg"
import styled from "styled-components";

const IconWrapper = styled.i`

    cursor: pointer;
    display: inline-block;
    width: ${({ width }) => width ? width : '18px'};
    height: ${({ height }) => height ? height : '18px'};
    margin: 0 5px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }


    `;

const Icon = (props) => {
    const {
        onClick,
        size,
        src
    } = props;
    return (
        <>
            <IconWrapper
                onClick={onClick}
                width={size}
                height={size}
            >
                <img src={src} alt="icon button" />
            </IconWrapper>
        </>
    )
}

const AddIcon = (props) => <Icon src={add}  {...props} />
const RemoveIcon = (props) => <Icon src={remove} size="20px" {...props} />

export { AddIcon, RemoveIcon }