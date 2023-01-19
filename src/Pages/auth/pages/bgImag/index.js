import { H1 } from "components/a"
import { Container } from "./styled"
import logo from "./add.svg"
import Input from "components/input"
import Dropdown from "components/dropdown"

const RightSection = () => {
    return (
        <>
            <div id="right">
                <div className="margin">

                    <div className="inlineflex">
                        <H1>Creat Business Page</H1>
                        <img src={logo} alt="add new" />
                    </div>
                    {/* input filds */}

                    <div className="inline">
                        <Input
                            inputype="text"
                            type="addData"
                            placeholder="Add business Page Name"
                        // value={data.businessName}
                        // onChange={(e) => handelChange(e, 'businessName')}

                        />
                        <Dropdown
                            placeholder="Select Category"
                        // isOpen={isOpen}
                        // toggel={toggle}
                        // close={close}
                        // onChange={() => handeldropdown(value, 'category')}
                        // value={value}
                        // updateValue={updateValue}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}


const LeftSection = () => {
    return (
        <>
            <div id="left">
                <H1>Preview Business Page</H1>
            </div>
        </>
    )
}



const BackgroundImage = () => (
    <>
        <Container>
            <RightSection />
            <LeftSection />
        </Container>
    </>
)


export default BackgroundImage