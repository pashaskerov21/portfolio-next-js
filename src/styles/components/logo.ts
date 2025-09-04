import styled, { css, keyframes } from "styled-components";
import { row_center } from "../mixin";
import { logoSpanAnimation } from "../animation";


type LogoProps = {
    $color: string,
    $infinite?: boolean,
}

export const LogoWrapper = styled.div<LogoProps>`
    font-family: 'Kalam', cursive;
    font-size: 24px;
    font-weight: 600;
    ${row_center};
    flex-wrap: wrap;
    user-select: none;
    cursor: default;
    color: ${props => props.$color === 'primary' ? props.theme.primaryColor : props.$color};
    position: relative;
    transition: all 0.2s;
    gap: 10px;
    @media (min-width: 330px){
        font-size: 24px;
    }
    @media (min-width: 576px){
        font-size: 24px;
        gap: 15px;
    }
    @media (min-width: 768px){
        font-size: 28px;
    }
    @media (min-width: 992px){
        font-size: 32px;
    }
    @media (min-width: 1200px){
        font-size: 40px;
    }
    /* &:hover{
        span{
            animation: ${logoSpanAnimation} 0.4s ease forwards;
        }
    } */
    ${
        props => props.$infinite && css`
        span{
            animation: ${logoSpanAnimation} 0.4s ease infinite;
        }
        `
    }
    div{
        ${row_center}
        
    }
    span{
        display: inline-block;
        transition: all 0.3s;
        margin-right: 1px;
        &:hover{
            transform: translateY(-10px);
        }
    }
`;

