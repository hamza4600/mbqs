// Main Body of the Customer List Page
import { useState } from "react";

import { ListHead } from "./variable";
// Style
import styles from "./style.module.css";
import Input from "components/input";
import DialogBox from "components/dialog";

import logo from "./Vector.svg";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin4Line } from "react-icons/ri";

export const ListBody = (props) => {
  const { array } = props;

  const [model, setModel] = useState(false);
  const [id, setId] = useState(0);

  const viewPage = (id) => (window.location.href = `/auth/product/${id}`);

  const openModel = (id) => {
    setModel((prev) => !prev);
    setId(id);
  };

  const deleteBusiness = () => {
    // remove index of item
    array.splice(id, 1);
    setModel((prev) => !prev);
  };

  return (
    <>
      <div className={styles.table}>
        <table>
          <thead>
            <tr className={styles.tableHeader}>
              {ListHead.map((item) => {
                return (
                  <th key={item.id} className={styles.theead}>
                    {item.name} <img src={logo} alt="svg" />
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {array.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  style={{ textAlign: "center", fontSize: "20px" }}
                >
                  No Data Found
                </td>
              </tr>
            )}

            {array.map(
              (item, v) => (
                console.log(Object.keys(item)[1]),
                (
                  <tr key={v} onClick={() => viewPage(item.businessName)}>
                    <td
                      className={styles.radio}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* <h4>{Object.keys(item)[1]}</h4> */}
                      <Input.Radio key={v} label={item.businessID} />
                    </td>
                    <td>
                      {/* <h4>{Object.keys(item)[2]}</h4> */}

                      {item.businessCat}
                    </td>
                    <td>
                    {/* <h4>{Object.keys(item)[3]}</h4> */}

                        {item.businessName}
                        </td>
                    <td>
                    {/* <h4>{Object.keys(item)[4]}</h4> */}

                        {item.email}
                        </td>
                    <td>
                    {/* <h4>{Object.keys(item)[5]}</h4> */}

                        {item.contact}
                        </td>
                    <td>
                    {/* <h4>{Object.keys(item)[6]}</h4> */}

                        {item.regesterDate}
                        </td>
                    <td
                      style={{
                        color:
                          item.compantStatus.toLocaleLowerCase() !== "active" &&
                          "#FF0000",
                      }}
                    >
                     {/* <h4>{Object.keys(item)[7]}</h4> */}

                      {item.compantStatus}
                    </td>
                    <td className={styles.action}>
                      <RiDeleteBin4Line
                        size={24}
                        alt="delete"
                        onClick={(e) => {
                          e.stopPropagation();
                          openModel(v);
                        }}
                      />
                      <FiEdit size={20} />
                    </td>
                  </tr>
                )
              )
            )}
          </tbody>
        </table>

        {model && (
          <>
            <DialogBox
              open={model}
              title="Are you sure you want to delete this ?"
              children={<Text placeholder="Enter Your Reason Hear" />}
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

const Text = (props) => {
  const { text, placeholder } = props;
  return (
    <>
      <div>
        <textarea
          name=""
          id="reason"
          cols="10"
          rows="10"
          value={text}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};
