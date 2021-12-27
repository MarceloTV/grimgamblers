import React, { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import MemberCard from "./MemberCard";

import couch from "../../info/couch.json";
import players from "../../info/players.json";

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

    .carrousel_members {
        width: 66rem;
        overflow: hidden;
        margin-left: 2rem;
        margin: auto;
        position: relative;
    }

    .carrousel_members .members {
        width: 100%;
        display: grid;
        grid-gap: .72rem;
        transition: all ease .7s;
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
        right: 1px;
        top: 38%;
    }
`;

/* -68.12rem */

if((players.length % 3) !== 1){

}

const Members: FC = (props) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [page, setPage] = useState(1);
    const [totalPages, ] = useState(
        (players.length % 3) === 1 ? Math.floor(players.length/3) + 1 : players.length/3
    );
    /* const margin = -68.12 * (
        (players.length / 3) !== 1 ? Math.floor(players.length/3) : players.length/3
    ); */
    const [margin, setMargin] = useState(0);
    
    return <SecionStyled>
        <h2>Miembros de GRIM</h2>
        <div className="coach">
            <MemberCard
                card_img={couch.card_img}
                profile_img={couch.profile_img}
                name={couch.name}
                position={couch.position}
                about={couch.about}
            />
        </div>
        <div className="carrousel_members">
            <div className="left" onClick={(e) => {
                if(page === 1) return;
                const x = (-68.12 * (page - 2));
                setMargin(x);
                setPage(page - 1);
            }}>{"<"}</div>
            <div className="right" onClick={(e) => {

                if(page === totalPages) return;

                let x;
                if(page === 1){
                    x = -68.12;
                }else {
                    x = -68.12 * page;
                }

                setMargin(x);
                setPage(page + 1);
            }}>{">"}</div>

            <div className="members" ref={ref} style={{
                gridTemplateColumns: `repeat(${players.length}, 22rem)`,
                /* marginLeft: margin + "rem" */
                transform: `translateX(${margin}rem)`
            }}>
                {players.map((v,i) => (
                    <MemberCard
                        key={i}
                        card_img={v.card_img}
                        profile_img={v.profile_img}
                        name={v.name}
                        position={v.position}
                        about={v.about}
                    />
                ))}
            </div>
        </div>
    </SecionStyled>;
}

export default Members;
