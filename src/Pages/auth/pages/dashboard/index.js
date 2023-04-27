import { Suspense } from 'react';
import PageSpinner from 'components/pageSpinner';
import Edit from "../../../../assits/Dash.png";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 90%;
    position : absolute;
    overflow : hidden;

    img {
        transform: all 1s ease-in-out;
        animation: scale 1s linear;
        object-fit: cover;
    }

    h2 {
        margin-top: 32px;
        font-size: 28px;
        font-weight: 500;
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
        height: 92%;
        img {
            width: 300px;
        }

        h2 {
            font-size: 1.5rem;
            text-align: center;
        }
    }

    `;

const Dashboard = () => {
    return (
        <>
            <Suspense fallback={<PageSpinner />}>
                <Container>
                    <img src={Edit} alt="MBiQs logo" loading='lazy'/>
                    <h2>
                    Welcome to our MBIQS dashboard panel
                    </h2>
                </Container>

            </Suspense>
        </>
    )
}

export default Dashboard