import styled, { css } from "styled-components";
import { opacityHideAnimation, opacityShowAnimation, preloaderAnimation } from "../animation";
import { row_center } from "../mixin";

type ButtonProps = {
    $formValidation: boolean,
}

export const SubmitButton = styled.button<ButtonProps>`
    width: 80%;
    max-width: 250px;
    color: ${props => props.theme.text};
    font-size: 22px;
    font-weight: 500;
    text-transform: uppercase;
    padding: 15px 30px;
    background-color: ${props => props.theme.primaryColor};
    border-radius: 10px;
    position: relative;
    border: 2px solid transparent;
    transition: all 0.2s;
    min-height: 65px;
    color: #fff;
    &::after{
        content: '';
        pointer-events: none;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border: 2px solid ${props => props.theme.primaryColor};
        border-radius: 10px;
        transition: all 0.3s;
        transform: scale(1.2);
        opacity: 0;
        @media (min-width: 768px){
            transform: scale(1.5);
        }
    }
    &:hover{
        background-color: transparent;
        color: ${props => props.theme.primaryColor};
        &::after{
            opacity: 1;
            transform: scale(1);
            box-shadow: 0 0 20px ${props => props.theme.primaryColor};
        }
    }
    .label{
        display: block;
        font-size: 24px;
    }
    .validate{
        display: flex;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        ${row_center};
        .loader{
            position: relative;
            width: 34px;
            height: 34px;
            animation: ${opacityHideAnimation} 0.2s ease 1.3s forwards;
            &::after{
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                border: 2px solid ${props => props.theme.primaryColor};
                
                border-right: 0;
                border-bottom: 0;      
                animation: ${preloaderAnimation} 0.5s linear infinite;
            }     
        }
        .check{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 3;
            color: ${props => props.theme.primaryColor};
            font-size: 36px;
            opacity: 0;
            animation: ${opacityShowAnimation} 0.2s ease 1.3s forwards;
            svg{
                display: block;
            }
        }
    }
    ${
        props => props.$formValidation && css`
            background-color: transparent;
            &::after{
                opacity: 1;
                transform: scale(1);
            }
        `
    }
`;