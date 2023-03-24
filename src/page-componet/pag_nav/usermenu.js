import Button from "components/button";
import styled from "styled-components"
import { FiUserPlus } from "react-icons/fi";
import { IoLogOutOutline } from "react-icons/io5";

const Wrapper = styled.div`

    position: absolute;
    right: 0px;
    width: 280px;
    min-height: 128px;
    background: #275482;
    top: 42px;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    z-index: 999;

    .user {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-top: 10px;
        margin-bottom: 20px;
        cursor: pointer;
    }

    .btngrop {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 65px;
    }

    .avatar {
        margin-right: 16px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
    }

    .time {
        font-size: 12px;
        font-weight: 200;
    }

    .name {
        font-size: 18px;
        font-weight: 500;
    }

    .usergrop {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
    }

    @media (max-width: 768px) {
        width: 220px;
    }
    `;

const UserMenu = ({ data }) => {
    const { name, time, avatar, logout, grouplogin, otherUser } = data

    return (
        <Wrapper>
            <a className="user" href={`/${name}`}>
                <img src={avatar} alt="Avatar" className="avatar" />
                <div>
                    <h3 className="name">
                        {name}
                    </h3>
                    <p className="time">
                        Loin Time : {time}
                    </p>
                </div>
            </a>

            {
                Array.isArray(otherUser) && otherUser.length > 0 && (
                    <div className="usergrop">
                        {otherUser.map((user) => (
                            <a key={user.id} className="user" href={`/${user?.name}`} >
                                <img src={user?.avatar} alt="Avatar" className="avatar" />
                                <div>
                                    <h3 className="name">
                                        {user?.name}
                                    </h3>
                                    <p className="time">
                                        Loin Time : {user?.logtime}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                )
            }

            <div className="btngrop">
                <Button
                    leftIcon={<IoLogOutOutline size={22} />}
                    type="usermodel"
                >
                    {logout}
                </Button>
                <Button
                    leftIcon={<FiUserPlus size={22} />}
                    type="usermodel"
                >
                    {grouplogin}
                </Button>
            </div>
        </Wrapper>
    )
}

export default UserMenu