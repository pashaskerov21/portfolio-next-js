import styled from "styled-components";
import { column_align_start, column_between, column_center, row_between, row_start } from "../mixin";

export const EducationWrapper = styled.ul`
    width: 100%;
    ${column_center};
    li{
        width: 100%;
        max-width: 1000px;
    }
`;
export const EducationCard = styled.div`
    width: 100%;
    min-height: 200px;
    ${column_between};
    max-width: 1000px;
    margin-bottom: 45px;
    box-shadow: 0 0 10px ${props => props.theme.primaryColor};
    border-radius: 20px;
    transition: all 0.3s;
    padding: 30px 20px;
    .title{
        width: 100%;
        ${row_start};
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 30px;
        font-family: monospace;
        svg{
            color: ${props => props.theme.primaryColor};
            font-size: 24px;
            margin-right: 10px;
            display: block;
            min-width: 30px;
        }
    }
    .content{
        width: 100%;
        ${column_align_start};
        font-family: monospace;
        .row{
            ${column_align_start};
            flex-wrap: wrap;
            margin-bottom: 15px;
            @media (min-width: 992px){
                ${row_start};
            }
            .label{
                white-space: nowrap;
               
                margin-right: 10px;
                color: ${props => props.theme.primaryColor};
                font-weight: 600;
                
            }
        }
        .bottom{
            width: 100%;
            ${column_center};
            @media (min-width: 576px){
                ${row_between}
            }
            .degree{
                font-size: 10px;
                white-space: nowrap;
                text-transform: uppercase;
                letter-spacing: 1px;
                padding: 8px 12px;
                background-color: ${props => props.theme.primaryColor};
                border-radius: 15px;
                font-weight: 600;
                margin-bottom: 20px;
                color: #fff;
                @media (min-width: 576px){
                    margin-bottom: 0;
                }
                
            }
            .date{
                white-space: nowrap;
                font-size: 12px;
                padding: 10px;
                background-color: ${props => props.theme.primaryColor};
                border: 1px solid ${props => props.theme.primaryColor};
                color: #fff;
                border-radius: 5px;
            }
        }
    }
    &:hover{
        box-shadow: 0 0 40px ${props => props.theme.primaryColor};
    }
`;