import styled from "styled-components";
import img from "./EmojiFrown.png"
// server error 
const Serror = styled.div`

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    nav {
        width: 100%;
        height: 40px;
        background: #275482;
        display: flex;
        justify-content: start;
        align-items: center;
        color: #fff;
        
        p {
            font-weight: 400;
            font-size: 21px;
            padding: 0 2rem;
        }
    }

    main {
        width: 100%;
        height: 100%;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    main div {
        width: 643px;
        height: 348px;
        background: #003153;
        border-radius: 4.58117px;

        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: column;

        h2 {
            font-weight: 300;
            font-size: 24px;
            color : #C2BEBE;
            padding: 0 2.8rem;
        }

        img {
            margin-top: 43px;
            margin-bottom: 29px;
        }

        a {
            font-weight: 300;
            font-size: 16px;
            width: 100%;
            display: flex;
            justify-content: end;
            padding: 0 2.9rem;
            margin-top: 2rem;
        }
    }

    footer {
        width: 100%;
        height: 25px;
        background: #275482;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 12px;
        font-weight: 500;
        
        p {
            font-size: 12px;
            font-weight: 400;
        }
    }


`;

const ServerError = () => {
    return (
        <>
            <Serror>
                <nav>
                    <p>
                    404 error message page not found
                    </p>
                </nav>
                <main>
                    <div>
                        <img src = {img} alt = "error" style={{width : '100px', height : '100px'}} />
                        <h2>Currently, the page is not available please try later or contact us and replace your message click here</h2>
                        <a  href="mailto: hamza@gmail.com" style={{color :'#FF7B7B'}}>Send Message</a>
                    </div>
                </main>
                <footer>
                    <p>
                    © Copyright by MBIQS (Pvt.) Limited, Since 2012. All Rights Reserved
                    </p>
                </footer>
            </Serror>
        </>
    )
}

export default ServerError