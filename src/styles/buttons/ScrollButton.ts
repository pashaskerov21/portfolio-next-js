import styled from "styled-components";
import { row_center } from "../mixin";

export const ScrollButton = styled.button`
    position: fixed;
    bottom: 50px;
    right: 20px;
    width: 50px;
    height: 50px;
    ${row_center};
    background-color: ${props => props.theme.primaryColor};
    border-radius: 10px;
    color: ${props => props.theme.text};
    font-size: 24px;
    box-shadow: 0 0 10px ${props => props.theme.text};
    transition: all 0.2s;
    z-index: 999;
    &:hover{
        box-shadow: 0 0 20px ${props => props.theme.text};
        transform: scale(1.2);
    }
`;