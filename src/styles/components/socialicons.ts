import styled, { css } from "styled-components";
import { column_center, row_center } from "../mixin";
import { headerSocialIonAnimation } from "../animation";

type HeaderIconProps = {
    $menuStatus: boolean,
    $loading: boolean,
}

export const HeaderSocialIcons = styled.ul<HeaderIconProps>`
    ${row_center}
    gap: 25px;
    color: #fff;
    @media (min-width: 1200px){
        display: none;
    }
    a{
        display: block;
        font-size: 24px;
        transition: all 0.2s;
        
        ${props => props.$menuStatus && css`
            transform: scale(0);
            animation: ${headerSocialIonAnimation} 0.5s ease forwards;
            `
        }
        &:last-child{
            margin-right: 0;
        }
        &:hover{
            transform: scale(1.3)
        }
    }
`;

export const MainSocialMediaWrapper = styled.ul`
    position: fixed;
    bottom: 150px;
    left: 20px;
    ${column_center};
    gap: 30px;
    display: none;
    z-index: 9999;
    @media (min-width: 1400px){
        display: flex;
    }
    @media (min-width: 1600px){
        left: 50px;
    }
    &::after{
        content: '';
        position: absolute;
        bottom: -150px;
        left: 50%;
        transform: translateX(-50%);
        width: 2px;
        height: 160px;
        background-color: ${props => props.theme.primaryColor};
    }
    a{
        font-size: 24px;
        transition: all 0.2s;
        &:hover{
            color: ${props => props.theme.primaryColor};
            transform: scale(1.3);
        }
    }
`;