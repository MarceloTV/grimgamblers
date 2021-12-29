import React, { FC } from "react";
import styled from "styled-components";

const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    width: 100%;

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

    /* .up {
        position: fixed;
        bottom: 0;
        right: 0;
    } */
`;

const scrollToTop = (duration: any) => {
    // cancel if already on top
    if (document.scrollingElement!.scrollTop === 0) return;

    const cosParameter = document.scrollingElement!.scrollTop / 2;
    let scrollCount = 0, oldTimestamp: any = null;

    function step (newTimestamp: any) {
        if (oldTimestamp !== null) {
            // if duration is 0 scrollCount will be Infinity
            scrollCount += Math.PI * (newTimestamp - oldTimestamp) / duration;
            if (scrollCount >= Math.PI) return document.scrollingElement!.scrollTop = 0;
            document.scrollingElement!.scrollTop = cosParameter + cosParameter * Math.cos(scrollCount);
        }
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
}

const Header: FC = (props) => {
    return <HeaderStyled>
        <div className="logo">
            <img src="https://res.cloudinary.com/dtyobwis5/image/upload/v1640632404/grim/grim_icon_zggozt.png" alt="grim" />
            <h2>Grim Gamblers</h2>
        </div>
        <nav>
            <a href="#" onClick={(e) => {
                e.preventDefault();
                scrollToTop(1000);
            }}>Inicio</a>
            <a href="#">Acerca</a>
            <a href="#">Miembros</a>
            <a href="#">Sponsors</a>
        </nav>
        {/* <button className="up"></button> */}
    </HeaderStyled>
}

export default Header;
