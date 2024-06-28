import styled from "styled-components";
import { row_center } from "../mixin";

export const ScrollButton = styled.button`
    position: fixed;
    bottom: 30px;
    right: 20px;
    width: 50px;
    height: 50px;
    ${row_center};
    background-color: ${props => props.theme.primaryColor};
    border-radius: 50%;
    color: #fff;
    font-size: 20px;
    transition: all 0.2s;
    z-index: 999;
    box-shadow: 0 0 10px ${props => props.theme.text};
    &:hover{
        transform: scale(1.1);
    }
`;