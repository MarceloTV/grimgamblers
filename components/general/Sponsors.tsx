import React, { FC } from "react";
import styled from "styled-components";

const DivStyled = styled.div`
    width: 200px;
    height: 200px;
    text-align: center;
    border: 1px solid rgba(0,0,0,.1);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    img {
        width: 90px;
        height: 90px;
    }

    h2 {
        color: var(--main);
    }
`;

const SectionStyled = styled.section`
    padding: 30px;
    width: 100%;
    text-align: center;

    & > h2 {
        color: var(--main);
        font-size: 3rem;
        margin-bottom: 40px;
        font-weight: lighter;
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Sponsor: FC = (props) => {
    return <DivStyled>
        <img src="https://res.cloudinary.com/dtyobwis5/image/upload/v1640806336/grim/sponsors/hcl_rdquos.webp" alt="sponsor" />
        <h2>Harrow College League</h2>
        <p style={{display: "none"}}>Mentira no nos pagan {">:v"}</p>
    </DivStyled>
}

const Sponsors: FC = (props) => {
    return <SectionStyled>
        <h2>Sponsors</h2>
        <div className="container">
            <Sponsor />
        </div>
    </SectionStyled>
}

export default Sponsors;
