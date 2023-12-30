import styled from "styled-components";
import { column_align_start, column_between, column_center, row_between, row_center } from "../mixin";

export const ExperienceWrapper = styled.div`
    width: 100%;
    ${column_center};
`;
export const ExperienceCard = styled.div`
    width: 100%;
    min-height: 200px;
    ${column_between};
    max-width: 800px;
    margin-bottom: 45px;
    box-shadow: 0 0 10px ${props => props.theme.primaryColor};
    border-radius: 20px;
    transition: all 0.3s;
    padding: 20px;
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
                font-size: 22px;
            }
        }
        .date{
            ${row_center};
            
        }
    }
    .company{
        width: 100%;
        ${column_align_start};
        .name{
            font-size: 18px;
            color: ${props => props.theme.primaryColor};
            margin-bottom: 5px;
            font-weight: 500;
            @media (min-width: 768px){
                font-size: 22px;
                margin-bottom: 10px
            }
        }
        .location{
            ${row_center};
            font-size: 14px;
            @media (min-width: 768px){
                font-size: 16px;
            }
        }
    }
    &:hover{
        box-shadow: 0 0 40px ${props => props.theme.primaryColor};
        @media (min-width: 768px){
            transform: scale(1.05)
        }
    }

`;