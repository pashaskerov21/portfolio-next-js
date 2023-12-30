import styled, { css } from "styled-components";
import { column_center, column_justify_start, row_between, row_center, row_justify_end } from "../mixin";
import { fixHeaderAnimation, headerLinkAnimation } from "../animation";


export const HeaderContainer = styled.header`
    width: 100%;
    background-color: ${props => props.theme.background};
    
`;

type HeaderProps = {
    $fixStatus: boolean,
}
export const GeneralNav = styled.nav<HeaderProps>`
    width: 100%;
    ${row_center};
    background-color: ${props => props.theme.background};
    .inner{
        width: 100%;
        padding: 10px 0;
        ${row_between};
    }
    ${props => props.$fixStatus === true && css`
            position: fixed;
            top: 0;
            left: 0;
            z-index: 999;
            box-shadow: 0 0 10px ${props => props.theme.primaryColor};
            animation: ${fixHeaderAnimation} 0.3s ease forwards;
        `
    }
`;

export const NavLinksWrapper = styled.div`
    min-width: 650px;
    ${row_between};
    display: none;
    @media (min-width: 1200px){
        display: flex;
    }
    @media (min-width: 1400px){
        min-width: 750px;
    }
    a{
        text-transform: uppercase;
        font-weight: 600;
        cursor: pointer;
        position: relative;
        transition: all 0.3s;
        font-family: 'Kalam', cursive;
        font-size: 18px;
        @media (min-width: 1400px){
            font-size: 22px;
        }
        &::after,
        &::before {
            content: '';
            position: absolute;
            width: 2px;
            height: 100%;
            background-color: transparent;
            transition: all 0.3s;
            
        }
        &::after {
            right: -10px;
            top: 0;
            transform: translateY(-10px) skew(-15deg);
        }

        &::before {
            left: -10px;
            top: 0;
            transform: translateY(10px) skew(-15deg);
        }
        &:hover{
            color: ${props => props.theme.primaryColor};
            &::after,
            &::before {
                background-color: ${props => props.theme.primaryColor};
                transform: translateY(0) skew(-15deg);
            }
        }
    }
`;



export const ButtonsWrapper = styled.div`
    ${row_justify_end}
`;


type MenuProps = {
    $menuStatus: boolean,
    $loading: boolean,
}

export const HeaderMenu = styled.div<MenuProps>`
    position: fixed;
    left: 0;
    bottom: ${props => props.$menuStatus ? '0' : '-100%'};
    width: 100%;
    height: 83vh;
    max-height: 700px;
    background-color: ${props => props.theme.primaryColorDarker};
    transition: all 0.5s;
    padding: 50px 20px;
    border-radius: 60px 60px 0 0;
    opacity: ${props => props.$menuStatus ? '1' : 0};
    ${column_justify_start}
    z-index: 9999;
    @media (min-width: 1200px){
        display: none;
    }
`;

export const LinksWrapper = styled.div<MenuProps>`
    width: 100%;
    ${column_center}
    a{
        text-transform: uppercase;
        font-weight: 600;
        margin-bottom: 20px;
        font-size: 20px;
        cursor: pointer;
        position: relative;
        cursor: pointer;
        transition: all 0.3s;
        font-family: 'Kalam', cursive;
        ${props => props.$menuStatus && css`
            opacity: 0;
            transform: translateY(-15px);
            animation: ${headerLinkAnimation} 0.5s ease forwards;
            `
        }
        &::after,
        &::before {
            content: '';
            position: absolute;
            width: 2px;
            height: 100%;
            background-color: transparent;
            transition: all 0.3s;
            
        }
        &::after {
            right: -15px;
            top: 0;
            transform: translateY(-10px) skew(-15deg);
        }

        &::before {
            left: -15px;
            top: 0;
            transform: translateY(10px) skew(-15deg);
        }
        &:hover{
            color: ${props => props.theme.text};
            &::after,
            &::before {
                background-color: ${props => props.theme.text};
                transform: translateY(0) skew(-15deg);
            }
        }
    }
`;