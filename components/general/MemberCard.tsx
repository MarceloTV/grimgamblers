import React, { FC } from "react";
import styled from "styled-components";

const DivStyled = styled.div`
    width: 20rem;
    background-color: #ebeef8;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;
    box-shadow: .5rem .5rem var(--main);

    .card-img {
        width: 100%;
        height: 13rem;
        object-fit: cover;
        clip-path: polygon(0 0, 100% 0, 100% 78%, 0% 100%);
    }

    .profile-img {
        width: 9rem;
        height: 9rem;
        object-fit: cover;
        border-radius: 50%;
        margin-top: -5rem;
        z-index: 998;
        border: 1rem solid #ebeef8;
    }

    h1 {
        /* font-size: 2.5rem; */
        color: var(--main);
        /* margin: 1.5rem 0; */
    }

    .job-title {
        color: #777;
        font-size: 1.5rem;
        font-weight: 300;
    }

    .about {
        font-size: .9rem;
        margin: 1.5rem 0;
        font-style: italic;
        text-align: center;
        padding: 0 5px;
        color: var(--main);
        height: 3.5rem;
    }
`;

interface CardInterface {
    card_img: string;
    profile_img: string;
    position: string;
    name: string;
    about: string;
    style?: any;
}

const MemberCard: FC<CardInterface> = (props) => {
    return <DivStyled style={props.style ? props.style : {}}>
        <img src={props.card_img} alt="champ" className="card-img"/>
        <img src={props.profile_img} alt={props.name} className="profile-img"/>
        <h1>{props.name}</h1>
        <p className="job-title">{props.position}</p>
        <p className="about">
            {props.about}
        </p>
    </DivStyled>
}

export default MemberCard;
