import styled from "styled-components";
import { column_center, column_justify_start, row_between, row_center, row_justify_start } from "../mixin";

export const AboutWrapper = styled.div`
    width: 100%;
    ${column_center};
    @media (min-width: 1200px){
        ${row_between};
    }
`;
export const AboutImage = styled.div`
    width: 100%;
    max-width: 600px;
    border-radius: 10px;
    @media (min-width: 1200px){
        width: 48%;
    }
    img{
        border-radius: 10px;
        width: 100%;
        height: 100%;
        object-fit: contain;
        box-shadow: 0 0 10px ${props => props.theme.primaryColor};
        transition: all 0.3s
    }
    &:hover{
        img{
            box-shadow: 0 0 30px ${props => props.theme.primaryColor};
        }
    }
`;
export const AboutContent = styled.div`
    width: 100%;
    ${column_justify_start};
    margin-top: 25px;
    @media (min-width: 1200px){
        width: 48%;  
        align-items: flex-start;
        margin-top: 0;
    }
`;
export const AboutText = styled.article`
    width: 100%;
    max-width: 600px;
    line-height: 30px;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    font-weight: 500;
    p{
        margin-bottom: 10px;
    }
    @media (min-width: 992px){
        font-size: 20px;
        line-height: 30px;
    }
    @media (min-width: 1200px){
        text-align: start; 
    }
`;

export const AboutContact = styled.div`
    width: 100%;
    ${column_center};
    gap: 40px;
    margin-top: 30px;
    @media (min-width: 1200px){
        ${row_justify_start}
    }
`;
export const ResumeButton = styled.a`
    ${row_center};
    padding: 20px 30px;
    position: relative;
    font-size: 22px;
    min-width: 220px;
    border-radius: 10px;
    font-weight: 600;
    text-transform: capitalize;
    box-shadow: 0 0 10px ${props => props.theme.primaryColor};
    text-indent: 99;
    color: ${props => props.theme.primaryColor} !important;
    transition: all 0.2s;
    font-family: monospace;
    &:after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        transition: all 0.5s;
        border-radius: 10px;
        background-color: ${props => props.theme.primaryColor};
        border: 1px solid ${props => props.theme.primaryColor};
        z-index: -1;
        opacity: 0;
    }
    &:hover{
        box-shadow: 0 0 50px ${props => props.theme.primaryColor};
        color: #fff !important;
        &::after{
            opacity: 1;
            width: 100%;
        }
    }
`;
export const AboutSocialWrapper = styled.ul`
    ${row_center};
    gap: 15px;
    a{
        font-size: 20px;
        width: 45px;
        height: 45px;
        ${row_center};
        box-shadow: 0 0 10px ${props => props.theme.primaryColor};
        border-radius: 50%;
        color: ${props => props.theme.primaryColor};
        transition: all 0.2s;
        @media (min-width: 768px){
            width: 60px;
            height: 60px;
            font-size: 24px;
            margin-right: 10px;
        }
        &:hover{
            opacity: 1 !important;
            transform: scale(1.3);
            box-shadow: 0 0 20px ${props => props.theme.primaryColor};
            background-color: ${props => props.theme.primaryColor};
            color: #fff;
        }
        
    }
    &:hover{
        a{
            opacity: 0.3;
        }
    }
`;