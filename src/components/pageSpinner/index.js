import Spinner from 'components/spinner/spinner';
import { forwardRef, memo } from 'react';
import styled from 'styled-components';


const PageSpinner = memo(forwardRef(
    function PageSpinner(props, ref) {
        return (
            <>
            <Backdrop ref={ref} {...props} >
                <Spinner sizeKey="large" color="#fff" isVisable={true}/>
            </Backdrop>
            </>
        )
    }
))

export default PageSpinner;


const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  background: rgba(0, 0, 0, 0.5);
  user-select: none;

`;
