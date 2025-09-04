import styled from "styled-components";
import { column_align_start, column_between, column_center, row_between, row_center } from "../mixin";

export const ExperienceWrapper = styled.ul`
    width: 100%;
    ${column_center};
    gap: 30px;
    li{
        width: 100%;
        max-width: 1000px;
    }
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