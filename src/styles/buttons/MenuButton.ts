import styled, { css } from "styled-components";
import { column_center } from "../mixin";

type MenuButtonProps = {
    $active: boolean,
}

export const MenuButton = styled.button<MenuButtonProps>`
    ${column_center}
    position: relative;
    width: 30px;
    height: 30px;
    cursor: pointer;
    span{
        display: inline-block;
        width: 100%;
        height: 4px;
        background-color: ${props => props.theme.text};
        border-radius: 10px;
        margin-bottom: 7px;
        transition: all 0.3s;
        &:nth-child(1){
            transform: ${props => props.$active && 'translateY(11px) rotate(45deg)'}
        }
        &:nth-child(2){
            margin-left: ${props => props.$active ? '0' : '-6px'};
            opacity: ${props => props.$active && '0'};
            transition: opacity 0.1s;
        }
        &:nth-child(3){
            margin-left: ${props => props.$active ? '0' : '-12px'};
            margin-bottom: 0;
            transform: ${props => props.$active && 'translateY(-11px) rotate(-45deg)'}
        }
        
    }
    @media (min-width: 1200px){
        display: none;
    }
`;