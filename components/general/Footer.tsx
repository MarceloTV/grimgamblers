import React, { FC } from "react";
import styled from "styled-components";

const FooterStyled = styled.footer `
    padding: 20px;
    background: var(--main);
    color: #fff;
    text-align: center;
    font-size: 1.5rem;
`;

const Footer: FC = (props) => {
    return <FooterStyled>
        <p>Grim Gamblers&copy; Derechos reservados 2021</p>
    </FooterStyled>
}

export default Footer;
