import { PreviewBtnGroup } from "page-componet/layout/editPage";
import { Container } from "./style";

const Input = ({ value, onChange, placeholder = "Edit Account Details", type }) => (
    <>
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    </>
);

const InputButton = ({
    value,
    onChange,
    placeholder,
    type,
    btnTxt,
    onClick,
}) => (
    <>
        <div id="inpbtn">
            <Input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
            <button onClick={onClick}>{btnTxt}</button>
        </div>
    </>
);

const Index = () => {
    
    const handalSubmit = () => {
        console.log("submit");
    };

    return (
        <>
            <Container>
                <div id="lft">
                    <h2>My Account</h2>
                    <input
                        type="text"
                        readOnly
                        value="Edit Account Details"
                    />
                    <InputButton
                        type="text"
                        onChange={() => {}}
                        placeholder={"Edit Account Details"}
                        btnTxt={"Edit Account Details"}
                        onClick={() => {}}
                    />
                    <div id="cont">
                        <Input />
                        <Input />
                        <button>Edit Account Details</button>
                    </div>
                    <InputButton
                        type="text"
                        onChange={() => {}}
                        placeholder={"Edit Account Details"}
                        btnTxt={"Edit Account Details"}
                        onClick={() => {}}
                    />{" "}
                    <InputButton
                        type="text"
                        onChange={() => {}}
                        placeholder={"Edit Account Details"}
                        btnTxt={"Edit Account Details"}
                        onClick={() => {}}
                    />
                </div>
                <div id="rgt">
                    {/* img */}
                    <img src="https://loremflickr.com/320/240" alt="" />
                    <button>Change Profile Picture</button>
                </div>
            </Container>
            <PreviewBtnGroup
                relative = {true}
                frontView = {false}
                nextPage = {handalSubmit}
                nextBtnText="Save & Exit"
            />

        </>
    );
};

export default Index;
