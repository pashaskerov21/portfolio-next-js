import styled from "styled-components";
import { column_center, row_around, row_center } from "../mixin";
import { opacityShowAnimation } from "../animation";


export const TimerModalItem = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme.background};
    backdrop-filter: blur(20px);
    z-index: 99999;
    ${row_center};
    display: none;
    padding: 15px;
    opacity: 0;

    &.active{
        display: flex;
        
        animation: ${opacityShowAnimation} 0.2s ease forwards;
        
    }

    .close-button{
        position: absolute;
        top: 20px;
        right: 15px;
        font-size: 36px;
        cursor: pointer;
        width: 60px;
        height: 60px;
        ${row_center};
        background-color: ${props => props.theme.primaryColor};
        color: ${props => props.theme.background};
        box-shadow: 0 0 10px  ${props => props.theme.primaryColor};
        border-radius: 50%; 
    }
    .timer-wrapper{
        width: 100%;
        max-width: 1000px;
        ${row_around};
        gap: 10px;
        flex-wrap: wrap;
        padding: 30px;
        box-shadow: 0 0 20px  ${props => props.theme.primaryColor};
        border-radius: 20px;
        @media (min-width: 576px){
            gap: 20px;
        }
        .timer-item{
            ${column_center};
            gap: 10px;
            font-size: 24px;
            font-weight: 700;
            color: ${props => props.theme.primaryColor};
            user-select: none;
            @media (min-width: 576px){
                font-size: 50px;
            }
            @media (min-width: 768px){
                font-size: 70px;
            }
            @media (min-width: 1200px){
                font-size: 90px;
            }
        }
    }

`;

