import React, { FC } from "react";
import styled from "styled-components";

const DivStyled = styled.div`
    width: 100%;
    height: 500px;
    position: relative;

    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .info {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.3);
        color: #fff;
        text-align: center;
    }

    .info .info_container {
        margin-bottom: 70px;
        opacity: .5;
    }

    .info .info_container img {
        width: 400px;
        height: 220px;
        object-fit: contain;
        margin-bottom: 30px;
    }

    .info .info_container h1 {
        font-size: 3rem;
    }

    .info .info_container p {
        font-size: 2rem;
    }
`;

const Titantron: FC = (props) => {
    return <DivStyled>
        <div className="info">
            <div className="info_container">
                <img src="/img/grim_icon.png" alt="" />
                <h1>Grim Gamblers</h1>
                <p>"Con las cartas jugamos, con la casa nos quedamos..."</p>
            </div>
        </div>
        <video src="https://res.cloudinary.com/dtyobwis5/video/upload/v1640458963/grim/GrimPlays2_ztabyk.mp4" autoPlay loop muted></video>
    </DivStyled>
}

export default Titantron;
