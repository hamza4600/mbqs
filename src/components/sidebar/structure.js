import styled from "styled-components";


export const Aside = styled.aside`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: ${(props) => (props.width ? props.width : "240")}px;
  height: ${(props) => props.height || "100%"};
  background-color: ${({ theme }) => theme.sideBarBg};
  color: ${({ theme }) => theme.sideBarText};
  position: absolute;
  // overflow: auto;
  right: ${(props) => (props.right ? "0px" : "")};
  left: ${(props) => (props.left ? "0px" : "")};
  z-index: 100;
  transition: 0.3s ease-in-out;
  animation: ${(props) => (props.animation ? props.animation : "")} 0.3s ease-in-out;

  @media (max-width: 768px) {

  }
  `;



export const Wrapper = styled.div`
  display: flex;
  margin-top: 0.4rem;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: -webkit-fill-available;
  position: relative;
`;
