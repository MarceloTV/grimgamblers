import React, { FC } from "react";
import styled from "styled-components";

const SectionStyled = styled.section`
    padding: 30px 10px;
    overflow: hidden;
    display: flex;
    justify-content: space-evenly;
    background: #fff;
    border-top: 3px solid var(--main);
    border-bottom: 3px solid var(--main);

    .text {
        width: 49%;
    }

    .text h2 {
        text-align: center;
        margin-bottom: 20px;
        color: var(--main);
        font-weight: lighter;
        font-size: 3rem
    }

    .text p {
        color: var(--main);
        text-align: justify;
        margin: auto;
        font-size: 1.3rem;
        font-weight: bold;
    }
    
    .text p a {
        color: #000;
        text-decoration: none;
    }

    img {
        width: 30%;
    }
`;

const About: FC = (props) => {
    return <SectionStyled>
        <div className="text">
            <h2>Acerca de GRIM</h2>
            <p>Tegucigalpa Grim Gamblers es un equipo de <a href="https://www.leagueoflegends.com/es-mx/">League of Legends</a> que actualmente juega en la <a href="https://www.nest-esports.com/hcl">Harrow College League</a>(o sus siglas HCL), debutó oficialmente el 26 de septiembre del año 2021 contra otro equipo de la misma competición llamado zips, este primer encuentro quedo en un empate, donde zips gano la primera partida y Grim Gamblers gano el segundo encuentro, Los hashtags de apoyo de este equipo son: #GoGRIM, #GRIMGAMBLERS, #SeGanaEnLate,
            #RollTheDice...</p>
        </div>

        <img src="https://res.cloudinary.com/dtyobwis5/image/upload/v1640632402/grim/poro_kn6o2t.png" className="poro"/>
    </SectionStyled>
}

export default About;
