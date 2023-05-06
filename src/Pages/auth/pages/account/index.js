import { PreviewBtnGroup } from "page-componet/layout/editPage";
import { Container } from "./style";
import useUserData from "Hooks/getUser";
import PageSpinner from "components/pageSpinner";
import { forwardRef, useEffect, useRef, useState } from "react";

const Input = forwardRef((props, ref) => {
    return (
        <>
            <input ref={ref} {...props} aria-label="input" />
        </>
    );
});


const InputButton = ({
    value,
    onChange,
    placeholder,
    type,
    btnTxt,
    id = "",
}) => {
    // when click on button the input should be editable
    const [isEditable, setIsEditable] = useState(false);
    const inputRef = useRef(null);

    function handleEdit() {
        if (isEditable) {
            inputRef.current.focus();
            console.log(inputRef.current.value);
            onChange({ target: { value: inputRef.current.value, id } });
        }
        setIsEditable( (prev) => !prev);
    }

    return (
        <>
            <div id="inpbtn">
                {isEditable ? (
                    <>
                        <Input
                            ref={inputRef}
                            type={type}
                            value={value}
                            onChange={onChange}
                            placeholder={placeholder}
                            id={id}
                        />
                        <button onClick={handleEdit}>{btnTxt}</button>
                    </>
                ) : (
                    <>
                        <span className="input">{value || placeholder}</span>
                        <button onClick={handleEdit}>{btnTxt}</button>
                    </>
                )}
            </div>
        </>
    );
};

const Index = () => {
    const { data, error, isLoading } = useUserData();
    const [state, setState] = useState({});

    useEffect(() => {
        if (data?.code === 200 && data?.status) {
            const { name, email, contact, address, profileImage } = data.data;
            setState({ name, email, contact, address, profileImage });
        }
    }, [data]);


    const handalSubmit = () => {
        console.log("submit");
    };

    const handalChange = (e) => {
        const { id, value } = e.target;
        setState((prev) => ({ ...prev, [id]: value }));
    };


    if (isLoading) return <PageSpinner />;
    if (error) return <div>error</div>;

    if (data?.code === 200 && data?.status) {
        const { name, email, contact, address, profileImage } = state;

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
                            onChange = {handalChange}
                            placeholder="Edit Account Details"
                            btnTxt="Change Name"
                            value={name}
                            id = "name"
                        />
                        <InputButton
                            type="text"
                            onChange = {handalChange}
                            placeholder="Edit Email Details"
                            btnTxt="Change Email"
                            value={email}
                            id = "email"
                        />
                        <InputButton
                            type="text"
                            onChange = {handalChange}
                            placeholder="Edit Contact Details"
                            btnTxt="Change Contact"
                            value={contact}
                            id = "contact"
                        />
                        <InputButton
                            type="text"
                            onChange = {handalChange}
                            placeholder="Edit Address Details"
                            btnTxt="Change Address"
                            value={address}
                            id = "address"
                        />
                    </div>
                    <div id="rgt">
                        {/* img */}
                        <img src="https://loremflickr.com/320/240" alt="" />
                        <button>Change Profile Picture</button>
                    </div>
                </Container>
                <PreviewBtnGroup
                    relative={true}
                    frontView={false}
                    nextPage={handalSubmit}
                    nextBtnText="Save & Exit"
                />
            </>
        );
    }
};

export default Index;
