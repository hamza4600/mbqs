import { Suspense } from 'react';
import PageSpinner from 'components/pageSpinner';
import Edit from "../../../../assits/Dash.png";
import styled from 'styled-components';
//  all components are lazy loaded 

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 90%;
    position : absolute;
    overflow : hidden;

    img {
        transform: all 1s ease-in-out;
        animation: scale 1s linear;
        object-fit: cover;
    }

    @keyframes scale {
        0% {    
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }

    @media (max-width: 768px) {
        
        width: 80%;

        img {

            width: 300px;
        }
    }

    `;

const Dashboard = () => {
    return (
        <>
            <Suspense fallback={<PageSpinner />}>
                <Container>
                    <img src={Edit} alt="edit" />
                </Container>

            </Suspense>
        </>
    )
}

export default Dashboard