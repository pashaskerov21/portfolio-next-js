import styled, { keyframes } from "styled-components";
import { row_center } from "../mixin";
import { logoSpanAnimation } from "../animation";


type LogoProps = {
    color: string,
}

export const LogoWrapper = styled.div<LogoProps>`
    font-family: 'Kalam', cursive;
    font-size: 20px;
    font-weight: 600;
    ${row_center};
    flex-wrap: wrap;
    user-select: none;
    cursor: default;
    color: ${props => props.color === 'primary' ? props.theme.primaryColor : props.color};
    position: relative;
    transition: all 0.2s;
    min-width: 100px;
    max-width: 100px;
    @media (min-width: 330px){
        min-width: 160px;
        max-width: 250px;
    }
    @media (min-width: 576px){
        min-width: 200px;
        font-size: 24px;
        max-width: 300px
    }
    @media (min-width: 768px){
        min-width: 225px;
        font-size: 28px;
        max-width: 100%
    }
    @media (min-width: 992px){
        min-width: 255px;
        font-size: 32px;
    }
    @media (min-width: 1200px){
        min-width: 310px;
        font-size: 40px;
    }
    &::before, 
    &::after{
        content: '';
        position: absolute;
        width: 2px;
        height: 100%;
        background-color: transparent;
        transition: all 0.1s;
    }
    &::after {
        right: 0;
        top: 0;
        transform: translateY(-10px) skew(-15deg);
    }
    &::before {
        left: 0;
        top: 0;
        transform: translateY(10px) skew(-15deg);
    }
    &:hover{
        min-width: 120px;
        max-width: 120px;
        @media (min-width: 330px){
            min-width: 190px;
            max-width: 250px;
        }
        @media (min-width: 576px){
            min-width: 220px;
        }
        @media (min-width: 768px){
            min-width: 250px;
        }
        @media (min-width: 992px){
            min-width: 280px;
        }
        @media (min-width: 1200px){
            min-width: 340px;
        }
        span{
            animation: ${logoSpanAnimation} 0.4s ease forwards;
        }
        &::after,
        &::before{
            background-color: ${props => props.color === 'primary' ? props.theme.primaryColor : props.color};
            transform: translateY(0) skew(-15deg);
        }
    }

    div{
        ${row_center}
        @media (min-width: 330px){
            &:first-child{
                margin-right: 10px;
            }
        }
        @media (min-width: 576px){
            &:first-child{
                margin-right: 12px;
            }
        }
        
    }
    span{
        display: inline-block;
        transition: all 0.3s;
        margin-right: 1px;
    }
`;

