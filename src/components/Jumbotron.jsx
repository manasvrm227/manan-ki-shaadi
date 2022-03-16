import React from "react";
import styled from "styled-components";
import Couple from "../assets/images/indian-couple.png"

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    .title{
        font-family: 'Alex Brush', cursive;
        color: #7f122a;
        font-weight: bold;
        font-size: 160px;
    }
    .couple-image-container{
        bottom: 0;
        width: 100vw;
        position: absolute;
        justify-content: flex-end;
        display: flex;
    }
    .couple-image{
        height: 350px;
        width: 350px;
    }
`

const Jumbotron = () =>{
    return(
        <Wrapper>
            <div className="title">Manan</div>
            <div className="couple-image-container">
                <img src={Couple} alt="couple" className="couple-image"/>
            </div>
        </Wrapper>
    )
}

export default Jumbotron;