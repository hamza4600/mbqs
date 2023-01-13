// Main Body of the Customer List Page

import { useState } from "react";

import { ListHead } from "./variable";
// Style
import styles from "./style.module.css";
import Input from "components/input";
import DialogBox from "components/dialog";

import logo from "./Vector.svg";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

export const ListBody = (props) => {

    const {
        array,
        setArray,
    } = props;

    const [model, setModel] = useState(false);
    const [id, setId] = useState(0);

    const viewPage = (id) => window.location.href = `/auth/product/${id}`;

    const openModel = (id) => {
        setModel(prev => !prev)
        setId(id)
    };

    const deleteBusiness = () => {
        const newArray = array.filter((item) => item.id !== id);
        setArray(newArray);
        setModel(prev => !prev)
    }

    return (
        <>
            <div className={styles.table}>
                <table>
                    <thead>
                        <tr>
                            {ListHead.map((item) => {
                                return <th key={item.id}>{item.name} <img src={logo} alt="svg" /></th>;
                            })}
                        </tr>
                    </thead>
                    <tbody>

                        {array.length === 0 && <tr>
                            <td colSpan={7} style={{ textAlign: "center", fontSize: "20px" }}>No Data Found</td>
                        </tr>}

                        {array.map((item, v) => (
                            <tr key={v}
                                onClick={() => viewPage(v)}
                            >
                                <td
                                    className={styles.radio}
                                    onClick={(e) => e.stopPropagation()}>
                                    <Input.Radio key={v} label={item.businessID} />
                                </td>
                                <td>{item.businessCat}</td>
                                <td>{item.businessName}</td>
                                <td>{item.email}</td>
                                <td>{item.contact}</td>
                                <td>{item.regesterDate}</td>
                                <td
                                    style={{ color: item.compantStatus.toLocaleLowerCase() !== "active" && "#FF0000" }}
                                >
                                    {item.compantStatus}</td>
                                <td className={styles.action}>
                                    <RiDeleteBinLine size={22}
                                        onClick={
                                            (e) => {
                                                e.stopPropagation()
                                                openModel(item.id)
                                            }
                                        }
                                    />
                                    <FiEdit size={20} />
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </table>

                {model && (
                    <>
                        <DialogBox
                            open={model}
                            title="Delete Business"
                            description="Are you sure you want to delete this business?"
                            onClose={() => setModel(false)}
                            onConfirm={deleteBusiness}
                            type="delete"
                        />
                    </>
                )}

            </div>
        </>
    );
};