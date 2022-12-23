
import { Item } from "./structure"
import outisdeClick from "functions/outside"


const Drop = (props) => {
    const { onClick, array } = props;
    return (
        <>
            {
                Array.isArray(array) ? array.map((item, index) => {
                    return (
                        <Item key={index}
                            onClick={onClick}
                            aria-hidden="true"
                        >
                            {item}
                        </Item>
                    )
                }
                ) : null
            }
        </>
    )
}

const Outside = outisdeClick(Drop)

export default Outside;
