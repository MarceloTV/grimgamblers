import React, { FC } from "react";
import styled from "styled-components";

const HeaderStyled = styled.header`
    padding-left: 10px;
    width: 100%;

    .logo {
        display: flex;
        align-items: center;
        padding-bottom: 5px;
    }

    .logo img {
        width: 70px;
        height: 40px;
        object-fit: contain;
        margin-right: 10px;
    }

    .logo h1{
        font-size: 1.3rem;
    }
    
    @media (max-width: 600px) {
        & {
            display: flex;
            justify-content: center;
        }
    }
`;

const Header: FC = (props) => {
    return <HeaderStyled>
        <div className="logo">
            <img src="https://res.cloudinary.com/dtyobwis5/image/upload/v1640632404/grim/grim_icon_zggozt.png" alt="grim" />
            <h2>Grim Gamblers</h2>
        </div>
    </HeaderStyled>
}

export default Header;
