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
  right: ${(props) => (props.right ? "0px" : "")};
  left: ${(props) => (props.left ? "0px" : "")};
  z-index: 100;
  transition:  300ms ease;
  will-change: transform;
  animation: ${(props) => (props.animation ? props.animation : "slideIn")} 0.3s ease;
  opacity: ${(props) => (props.opacity ? props.opacity : "1")};

  @keyframes slideIn {
    from {
      transform: translateX(-100%);
    } to {
      transform: translateX(0);
    }
  }

  @media (max-width: 768px) {
    width: ${(props) => (props.width ? props.width - 10 : "230")}px;
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
  font-weight: 500;
  line-height: 18px;
`;
