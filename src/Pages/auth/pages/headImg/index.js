import { H1 } from "components/a"
import { Divider, InputWrapper } from "./style"
import add from "./add.svg"
import remove from "./delet.svg"

const InputSection = () => {
    return (
        <>
            <InputWrapper id="right">
                <div className="inline">
                    <H1>Header Image Slider</H1>

                    <div className="line">
                        <p className="italic">
                            All Images should be of same sizes
                        </p>
                        <div className="line">
                            <img src={add} alt="add new" />
                            <img src={remove} alt="add new" />
                        </div>
                    </div>
                </div>
            </InputWrapper>
        </>
    )
}

const PreviewSection = () => {
    return (
        <>
            <div id="left">
                <H1>Preview Image</H1>
            </div>
        </>
    )
}




const HeaderImage = () => {
    return (
        <>
            <Divider>
                <InputSection />
                <PreviewSection />
            </Divider>
        </>
    )
}

export default HeaderImage