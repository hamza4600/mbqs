import React, { useState } from "react";
import Dropdown from "components/dropdown";
import useHover from "Hooks/useHover";
import { IconsContainer, Span } from "./styled";
import Input from "components/input";
import { AddIcon, RemoveIcon } from "page-componet/iconbutton";
import { BoxTwo } from "page-componet/layout/style";
import { useReducer } from "react";
import { settingsIcons } from "./variable";

const Index = () => {
  const initialState = {
    twitterUrl: "",
    youtubeUrl: "",
    instaUrl: "",
    fbUrl: "",
    iconsArray: [],
    dropdown: {
      category: "",

    },
  };
  console.log("🚀 ~ file: index.js:24 ~ Index ~ initialState", initialState)
  const [select, setSelect] = useState();

  const handelChange = (e) => {
    dispatch({ type: e.target.id, value: e.target.value });
  };
  const handelDropdown = (value, index) => {
    dispatch({ type: "dropdown", value: { name: index, value: value } });
  };

  const [data, dispatch] = useReducer((state, action) => {
    return { ...state, [action.type]: action.value };
  }, initialState);


  const handleChange = (id) => {
    console.log("🚀 ~ file: index.js:53 ~ handleChange ~ id", id)
    const newIcons = initialState.iconsArray.push(id)
  }
  
  return (
    <>
      <p className="menu-edit">Menu Edit</p>

      <BoxTwo>
        <Dropdown
          placeholder="Select And Enable The Icon Function"
          value={data.dropdown.category}
          updateValue={(value) => handelDropdown(value.name, "category")}
        />
      </BoxTwo>
      <IconsContainer>
        <ul className="toppings-list">
          {settingsIcons.map(({ id, title, icon }) => {
            return (
              <li key={id}>
                <div className="toppings-list-item">
                  <input
                    type="checkbox"
                    name={title}
                    value={title}
                    onChange={() => handleChange(id)}
                    style={{ marginRight: '6px' }}

                  />
                  <Icon
                    key={id}
                    icon={icon}
                    hover={title}
                    id={id}
                    select={select}
                  />
                </div>
              </li>
            );
          })}

        </ul>

      </IconsContainer>
      <>
        <Input
          inputype="text"
          type="addDataMenu"
          placeholder="Enter Your Twitter Url"
          value={data.twitterUrl}
          id="twitterUrl"
          onChange={handelChange}
        />
        <div className="btngrp">
          <AddIcon />
          <RemoveIcon />
        </div>
      </>

      <>
        <Input
          inputype="text"
          type="addDataMenu"
          placeholder="Enter Your Youtube Url"
          value={data.youtubeUrl}
          id="youtubeUrl"
          onChange={handelChange}
        />
        <div className="btngrp">
          <AddIcon />
          <RemoveIcon />
        </div>
      </>

      <>
        <Input
          inputype="text"
          type="addDataMenu"
          placeholder="Enter Your Instagram Url"
          value={data.instaUrl}
          id="instaUrl"
          onChange={handelChange}
        />
        <div className="btngrp">
          <AddIcon />
          <RemoveIcon />
        </div>
      </>

      <>
        <Input
          inputype="text"
          type="addDataMenu"
          placeholder="Enter Your Facebook Url"
          value={data.fbUrl}
          id="fbUrl"
          onChange={handelChange}
        />
        <div className="btngrp">
          <AddIcon />
          <RemoveIcon />
        </div>
      </>
    </>
  );
};

export default Index;
function Icon(props) {
  const { icon, hover, id, select } = props;
  const [ref, isHovering] = useHover();

  return (
    <>
      <Span
        ref={ref}
        key={id}
        role="tab"
        aria-selected={id === select}
        aria-controls={`panel-id-${id}`}
        aria-expanded={isHovering}
      >
        <i>{icon}</i>
        {/* {isHovering && (
                    <Tooltip
                        isShown={true}
                        content={hover}
                        type="sidebar" />
                )} */}
      </Span>
    </>
  );
}
