import styled from "styled-components";
import { row_center } from "../mixin";

type ThemeButtonProps = {
    $themestatus: string,
}

export const ThemeButton = styled.button<ThemeButtonProps>`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    box-shadow: 0 0 10px ${props => props.theme.text};
    margin-right: 15px;
    background-color:  ${props => props.theme.text};
    color:  ${props => props.theme.background};   
    ${row_center}
    font-size: ${props => props.$themestatus === 'dark' ? '20px' : '16px'};
    svg{
        display: block;
        transition: all 0.4s;
        
    }
    &:hover{
        svg{
            transform: rotate(360deg);
        }
    }
    @media (min-width: 992px){
        margin-right: 20px;
    }
    @media (min-width: 1200px){
        width: 45px;
        height: 45px;
        font-size: ${props => props.$themestatus === 'dark' ? '24px' : '18px'};
        margin-right: 0;
    }
`