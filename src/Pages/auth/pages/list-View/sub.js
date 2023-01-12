// Main Body of the Customer List Page
import { useMemo } from "react";

import { ListBod, ListHead } from "./variable";
// Style
import styles from "./style.module.css";
import Input from "components/input";
// import { useTranslation } from "react-i18next";
import logo from "./Vector.svg";

export const ListBody = () => {

    const bigList = useMemo(() => {
        let arr = [];
        for (let i = 0; i < 10; i++) {
            arr.push(ListBod);
        }
        return arr;
    }, []);

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
                        {bigList.map((item, v) => (
                            <tr key={v}>
                                <td> <Input.Radio key={v} label={item.businessID} /> </td>
                                <td>{item.businessCat}</td>
                                <td>{item.businessName}</td>
                                <td>{item.email}</td>
                                <td>{item.contact}</td>
                                <td>{item.regesterDate}</td>
                                <td>{item.compantStatus}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};



