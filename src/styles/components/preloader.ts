import styled from "styled-components";
import { row_center } from "../mixin";
import { preloaderAnimation } from "../animation";
import Logo from "@/src/components/Logo";

export const PreloaderWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    background-color: ${props => props.theme.background};
    z-index: 99999;
    ${row_center};
    .loader{
        border: 5px solid ${props => props.theme.primaryColor};
        border-radius: 50%;
        ${row_center};
        position: fixed;
        @media (min-width: 992px){
            border-width: 10px;
        }
        &.load-1{
            width: 220px;
            height: 220px;
            border-bottom-color: transparent;
            animation: ${preloaderAnimation} 0.7s linear infinite;
            @media (min-width: 992px){
                width: 360px;
                height: 360px;
            }
        }
        &.load-2{
            width: 180px;
            height: 180px;
            border-top-color: transparent;
            animation: ${preloaderAnimation} 0.7s linear infinite reverse;
            @media (min-width: 992px){
                width: 300px;
                height: 300px;
            }
        }
        &.load-3{
            width: 140px;
            height: 140px;
            border-left-color: transparent;
            animation: ${preloaderAnimation} 0.7s linear infinite;
            @media (min-width: 992px){
                width: 240px;
                height: 240px;
            }
        }
        &.load-4{
            width: 100px;
            height: 100px;
            border-right-color: transparent;
            animation: ${preloaderAnimation} 0.7s linear infinite reverse;
            @media (min-width: 992px){
                width: 180px;
                height: 180px;
            }
        }
    }
`