import React, { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import MemberCard from "./MemberCard";

import couch from "../../info/couch.json";
import players from "../../info/players.json";
import staff from "../../info/staff.json";
import StaffCard from "./StaffCard";

const SecionStyled = styled.section`
    width: 100%;
    padding: 10px;

    h2 {
        text-align: center;
        margin-bottom: 20px;
        color: var(--main);
        font-weight: lighter;
        font-size: 3rem;
    }

    .coach {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .staff {
        display: flex;
        width: 100%;
        justify-content: space-evenly;
    }

    .carrousel_members {
        width: 90%;
        overflow: hidden;
        position: relative;
        margin: auto;
    }

    .carrousel_members .members {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(${players.length}, 30%);
        grid-gap: 4%;
    }

    .carrousel_members .left,.carrousel_members .right {
        position: absolute;
        height: 5rem;
        width: 5%;
        background: rgba(var(--main-rgb),.2);
        z-index: 1000;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 2.5rem;
        transition: all ease .3s;
    }

    .carrousel_members .left:hover,.carrousel_members .right:hover {
        background: var(--main);
    }
    .carrousel_members .left {
        left: 0;
        top: 38%;
    }
    .carrousel_members .right {
        right: 1.2%;
        top: 38%;
    }

    .yimo .about {
        padding-bottom: 10px;
        height: auto;
    }

    @media (max-width: 1030px){
        .yimo {
            width: 35%;
        }

        .staff_card {
            width: 30%;
        }
    }

    @media (max-width: 1000px){
        .member_card .about {
            height: 5rem;
        }
    }

    @media (max-width: 950px){
        .staff {
            flex-wrap: wrap;
        }

        .staff_card {
            width: 40%;
        }
    }

    @media (max-width: 850px){
        .carrousel_members .members {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(${players.length}, 47%);
            grid-gap: 4%;
        }
    }

    @media (max-width: 800px){
        .yimo {
            width: 45%;
        }
    }

    @media (max-width: 700px){
        .carrousel_members {
            width: 100%;
        }

        .staff_card {
            width: 55%;
        }
    }

    @media (max-width: 600px){
        .yimo {
            width: 55%;
        }
    }

    @media (max-width: 490px){
        .carrousel_members .members {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(${players.length}, 98%);
            grid-gap: 4%;
        }

        .carrousel_members .members .member_card .about {
            font-size: 1rem;
        }

        .yimo {
            width: 75%;
        }

        .staff_card {
            width: 75%
        }
    }
`;

const Members: FC = (props) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPage] = useState(
        (players.length % 3) === 1 ? Math.floor(players.length/3) + 1 : players.length/3
    );

    const [margin, setMargin] = useState(0);
    
    useEffect(() => {
        if(window.screen.width <= 490){
            setTotalPage(players.length)
        }else if (window.screen.width <= 850){
            setTotalPage((players.length % 2) === 1 ? Math.floor(players.length/2) + 1 : players.length/2)
        }

        window.onresize = (e) => {
            if(window.screen.width <= 490){
                setTotalPage(players.length)
            }else if (window.screen.width <= 850){
                setTotalPage((players.length % 2) === 1 ? Math.floor(players.length/2) + 1 : players.length/2)
            }
        }
    },[])

    return <SecionStyled>
        <h2>Miembros de GRIM</h2>
        <div className="coach">
            <MemberCard
                className="yimo"
                card_img={couch.card_img}
                profile_img={couch.profile_img}
                name={couch.name}
                position={couch.position}
                about={couch.about}
            />
        </div>
        <div className="staff">
            {staff.map((v,i) => {
                return <StaffCard
                    className="staff_card"
                    square={170}
                    key={i}
                    profile_img={v.profile_img}
                    card_img={v.card_img}
                    name={v.name}
                    position={v.position}
                />
            })}
        </div>
        <div className="carrousel_members">
            <div className="left" onClick={() => {
                if(page === 1) return;
                setMargin((page-2) * 102)
                setPage(page - 1)
            }}>{"<"}</div>
            <div className="right" onClick={() => {
                if(page === totalPages) return;
                setMargin(page * 102)
                setPage(page + 1)
            }}>{">"}</div>
            <div className="members" style={{
                transition: "ease all .7s",
                transform: `translateX(-${margin}%)`
            }}>
                {players.map((v, i) => (
                    <MemberCard
                        key={i}
                        className="member_card"
                        square={170}
                        width={"100%"}
                        name={v.name}
                        card_img={v.card_img}
                        profile_img={v.profile_img}
                        about={v.about}
                        position={v.position}           
                    />
                ))}
            </div>
        </div>
    </SecionStyled>;
}

export default Members;
