import styled from "styled-components";
import { row_center } from "../mixin";
import { pulseAnimation } from "../animation";

export const TimerButton = styled.div`
    position: fixed;
    bottom: 100px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    ${row_center};
    background-color: ${props => props.theme.primaryColor};
    color: #fff;
    font-size: 20px;
    transition: all 0.2s;
    z-index: 999;
    cursor: pointer;
    animation: ${pulseAnimation} 1s ease infinite;
`;