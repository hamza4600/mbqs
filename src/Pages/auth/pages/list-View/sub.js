// Main Body of the Customer List Page
import { useMemo } from "react";

import { ListBod, ListHead } from "./variable";
// Style
import styles from "./style.module.css";


export const ListBody = () => {

    const bigList = useMemo(() => {
        let arr = [];
        for (let i = 0; i < 28; i++) {
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
                                return <th key={item.id}>{item.name}</th>;
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {bigList.map((item, v) => (
                            <tr key={v}>
                                {/* <td> <Input.Radio key={v} label={item.customerID} /> </td> */}
                                <td>{item.customerName}</td>
                                <td>{item.address}</td>
                                <td>{item.customerWallet}</td>
                                <td>{item.eMoney}</td>
                                <td>{item.subscriptionPackage}</td>
                                <td>{item.customerOrder}</td>
                                <td>{item.customerInvoice}</td>
                                <td>{item.paymentStatus}</td>
                                <td>{item.customerStatus}</td>
                                <td>{item.note}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};



