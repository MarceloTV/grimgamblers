import React, { FC } from "react";
import styled from "styled-components";

const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    .logo {
        display: flex;
        align-items: center;
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

    nav {
        width: 35%;
    }

    nav a {
        display: inline-block;
        text-decoration: none;
        width: 25%;
        padding-top: 20px;
        padding-bottom: 20px;
        text-align: center;
        color: #000;
    }

    nav a:hover {
        transition: all ease .3s;
        color: var(--main);
    }
`;

const Header: FC = (props) => {
    return <HeaderStyled>
        <div className="logo">
            <img src="https://res.cloudinary.com/dtyobwis5/image/upload/v1640632404/grim/grim_icon_zggozt.png" alt="grim" />
            <h2>Grim Gamblers</h2>
        </div>
        <nav>
            {["Inicio","Acerca","Miembros","Sponsors"].map((v,i) => {
                return <a href="#" key={i}>{v}</a>
            })}
        </nav>
    </HeaderStyled>
}

export default Header;
