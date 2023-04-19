import Button from "components/button";
import styled from "styled-components";
import { IoLogOutOutline } from "react-icons/io5";
import { Suspense } from "react";

const Wrapper = styled.div`
    position: absolute;
    right: 1px;
    width: 333px;
    height: 337px;
    background: #275482;
    top: 42px;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding: 32px 0px 0px 23px;
    z-index: 999;
    overflow-y: auto;
    overflow-x: hidden;

    .user {
        display: flex;
        flex-direction: row;
        align-items: start;
        justify-content: start;
        width: 100%;
        margin-bottom: 22px;
        cursor: pointer;
    }

    .btngrop {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 45px;
        position: relative;
        margin-top: 15px;
        margin-bottom: 10px;
    }

    .btngrop::after {
        content: "";
        position: absolute;
        top: 0;
        left: 50px;
        width: 200px;
        height: 1px;
        background: #fff;
        opacity: 0.2;
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
        margin-top: 4px;
    }

    .name {
        font-size: 18px;
        font-weight: 500;
    }

    .usergrop {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    @media (max-width: 768px) {
        width: 220px;
    }
`;

const UserMenu = ({ data , logoutClick }) => {
    const { name, time, avatar, logout, otherUser } = data;

    return (
        <Wrapper>
            <Suspense fallback={<div>Loading...</div>}>
                <a className="user" href={`/${name}`}>
                    <img
                        src={avatar}
                        alt="Avatar"
                        className="avatar"
                        loading="lazy"
                    />
                    <div>
                        <h3 className="name">{name}</h3>
                        <p className="time">Loin Time : {time}</p>
                    </div>
                </a>

                {Array.isArray(otherUser) && otherUser.length > 0 && (
                    <div className="usergrop">
                        {otherUser.map((user) => (
                            <a
                                key={user.id}
                                className="user"
                                href={`/${user?.name}`}
                            >
                                <img
                                    src={user?.avatar}
                                    alt="Avatar"
                                    className="avatar"
                                    loading="lazy"
                                />
                                <div>
                                    <h3 className="name">{user?.name}</h3>
                                    <p className="time">
                                        Loin Time : {user?.logtime}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                )}

                <div className="btngrop">
                    <Button
                        leftIcon={<IoLogOutOutline size={22} />}
                        type="usermodel"
                        onClick={logoutClick}
                    >
                        {logout}
                    </Button>
                </div>
            </Suspense>
        </Wrapper>
    );
};

export default UserMenu;
