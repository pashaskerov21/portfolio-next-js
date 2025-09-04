import styled from "styled-components";
import { row_center } from "../mixin";

interface ScrollButtonProps {
  $scrollValue: number;
  $visible: boolean;
}

export const ScrollButton = styled.button<ScrollButtonProps>`
    position: fixed;
    bottom: 30px;
    right: 20px;
    width: 60px;
    height: 60px;
    ${row_center}
    display: ${props => props.$visible ? 'flex' : 'none'};
    background: conic-gradient(#42b883 ${props => props.$scrollValue + 2}%, ${props => props.theme.background} ${props => props.$scrollValue + 2}%);
    border-radius: 50%;
    color: #fff;
    font-size: 20px;
    transition: all 0.2s;
    z-index: 999;
    box-shadow: 0 0 10px ${props => props.theme.text};
    .progress-value{
        width: 50px;
        height: 50px;
        background-color: ${props => props.theme.background};
        border-radius: 50%;
        ${row_center};
        svg{
            color: ${props => props.$scrollValue > 98 ? '#42b883' : props => props.theme.text}; 
        }
    }
`;