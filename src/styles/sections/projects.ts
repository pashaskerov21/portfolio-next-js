import styled from "styled-components";
import { column_align_start, row_center, row_justify_start } from "../mixin";
import { projectLinkAnimation, projectSkillAnimation } from "../animation";

export const ProjectsWrapper = styled.ul`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 30px;
    place-items: center;
    @media (min-width: 768px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 1200px){
        grid-template-columns: repeat(3, 1fr);
    }
    li{
        width: 100%;
        max-width: 380px;
    }
    `;
export const ProjectCard = styled.div`
    width: 100%;
    max-width: 380px;
    height: 200px;
    border-radius: 20px;
    position: relative;
    @media (min-width: 768px){
        height: 250px;
    }
    .project-img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        border-radius: 20px;
        border: 1px solid ${props => props.theme.primaryColor};
        box-shadow: 0 0 10px ${props => props.theme.primaryColor};
    }
    &:hover{
        .project-img{
            box-shadow: 0 0 30px ${props => props.theme.primaryColor}
        }
    }

`;
export const ProjectContent = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0, 0.8);
    border-radius: 20px;
    padding: 10px;
    opacity: 0;
    transition: all 0.3s;
    overflow: hidden;
    &:hover{
        opacity: 1;
        img{
            animation: ${projectSkillAnimation} 0.5s ease forwards;
        }
        a{
            animation: ${projectLinkAnimation} 0.5s ease forwards;
        }
    }
    .inner{
        width: 100%;
        position: absolute;
        bottom: 15px;
        left: 0;
        padding-left: 15px;
        ${column_align_start};
        gap: 10px;
        @media (min-width: 768px){
            bottom: 25px;
            padding-left: 25px;
        }
        .title{
            font-size: 25px;
            color: ${props => props.theme.primaryColor};
            user-select: none;
            font-family: monospace;
            @media (min-width: 1200px){
                font-size: 28px;
            }
        }
    }
    .links{
        ${row_center};
        gap: 8px;
        position: absolute;
        top: 20px;
        right: 20px;
        
        @media (min-width: 992px){
            top: 25px;
        }
        a{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: ${props => props.theme.primaryColor};
            box-shadow: 0 0 10px ${props => props.theme.primaryColor};
            color: #fff;
            ${row_center};
            font-size: 18px;
            transition: all 0.2s;
            transform: translateY(-100px);
            opacity: 0;
            svg{
                display: block;
            }
            &:last-child{
                
                margin-right: 0;
                animation-delay: 0.1s;
            }
            &:hover{
                box-shadow: 0 0 20px ${props => props.theme.primaryColor};
            }
            @media (min-width: 992px){
                /* font-size: 22px; */
                /* width: 50px;
                height: 50px; */
            }
        }
    }
`;
export const ProjectSkillsWrapper = styled.ul`
    width: 80%;
    ${row_justify_start};
    flex-wrap: wrap;
    gap: 7px;
    img{
        width: 15px;
        height: 15px;
        @media (min-width: 768px){
            width: 25px; 
            height: 25px;
        }
        transform: scale(0);
    }
`;

export const AllProjectButton = styled.div`
    width: 100%;
    max-width: 300px;
    margin: 40px auto;
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
    cursor: pointer;
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
        color: ${props => props.theme.text} !important;
        &::after{
            opacity: 1;
            width: 100%;
        }
    }
`

export const ProjectCategoriesWrapper = styled.div`
    width: 100%;
    ${row_center};
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 60px;
    button{
        cursor: pointer;
        padding: 10px 20px;
        ${row_center};
        border: 2px solid ${props => props.theme.primaryColor};
        border-radius: 10px;
        font-size: 18px;
        font-weight: 600;
        color: ${props => props.theme.primaryColor};
        box-shadow: 0 0 10px ${props => props.theme.primaryColor};
        font-family: monospace;
        &.active{
            background-color: ${props => props.theme.primaryColor};
            color: #fff;
        }
        @media (min-width: 768px){
            font-size: 22px;
            padding: 15px 30px;
        }
    }
`;