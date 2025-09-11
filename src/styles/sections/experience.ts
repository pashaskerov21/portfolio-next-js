import styled from "styled-components";
import { column_align_start, column_between, column_center, row_between, row_center } from "../mixin";

export const ExperienceWrapper = styled.ul`
    width: 100%;
    ${column_center};
    gap: 30px;
    position: relative;
    li.listitem{
        width: 100%;
        max-width: 1000px;
        position: relative;
    }
    /* @media (min-width: 1200px){
     &::after{
        content: "";
        width: 3px;
        height: 100%;
        background-color: #fff;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
     }   
    li.listitem{
        width: calc(50% - 50px);
        align-self: flex-start;
        z-index: 10;
        &::after{
            content: '';
            position: absolute;
            top: 0;
            left: calc(100% + 37px);
            width: 25px;
            height: 25px;
            border-radius: 50%;
            background-color: #42b883;
        }
        &:nth-child(even){
            align-self: flex-end;
            &::after{
                left: -63px;
            }
        }
     }
    } */
`;
export const ExperienceCard = styled.div`
    width: 100%;
    max-width: 1000px;
    min-height: 200px;
    ${column_between};
    box-shadow: 0 0 10px ${props => props.theme.primaryColor};
    border-radius: 20px;
    transition: all 0.3s;
    padding: 20px 20px 30px;
    svg{
        color: ${props => props.theme.primaryColor};
        font-size: 20px;
        margin-right: 5px;
        display: block;
    }
    span{
        display: block;
        line-height: 0;
    }
    .title{
        width: 100%;
        font-family: monospace;
        ${column_align_start};
        @media (min-width: 768px){
            ${row_between};
        }
        .position{
            color: ${props => props.theme.primaryColor};
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 15px;
            @media (min-width: 768px){
                margin-bottom: 0;
                font-size: 26px;
            }
        }
        .date{
            ${row_center};
            
        }
    }
    article{
        width: 100%;
        padding: 35px 0;
        font-family: monospace;
        .description{
            width: 100%;
            margin-bottom: 10px;   
        }
        .responsibilities{
            padding-left: 30px;
            li{
                list-style: '- ';
                margin-bottom: 5px;
            }
        }
    }
    .company{
        width: 100%;
        ${column_align_start};
        gap: 10px;
        font-family: monospace;
        .name{
            font-size: 18px;
            color: ${props => props.theme.primaryColor};
            font-weight: 800;
            @media (min-width: 768px){
                font-size: 22px;
            }
        }
        .location{
            font-size: 14px;
            @media (min-width: 768px){
                font-size: 18px;
            }
        }
    }
    &:hover{
        box-shadow: 0 0 40px ${props => props.theme.primaryColor};
    }

`;