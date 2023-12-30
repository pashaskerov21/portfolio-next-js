import styled from "styled-components";
import { column_align_start, row_center, row_justify_start } from "../mixin";
import { projectLinkAnimation, projectSkillAnimation } from "../animation";

export const ProjectsWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 40px;
    place-items: center;
    @media (min-width: 768px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 1200px){
        grid-template-columns: repeat(3, 1fr);
    }
    `;
export const ProjectCard = styled.div`
    width: 100%;
    max-width: 400px;
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
        @media (min-width: 768px){
            bottom: 25px;
            padding-left: 25px;
        }
        .title{
            font-size: 25px;
            margin-bottom: 15px;
            color: ${props => props.theme.primaryColor};
            user-select: none;
            @media (min-width: 1200px){
                font-size: 28px;
            }
        }
    }
    .links{
        ${row_center}
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
            ${row_center};
            margin-right: 10px;
            font-size: 16px;
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
                font-size: 22px;
                width: 50px;
                height: 50px;
                margin-right: 15px;
            }
        }
    }
`;
export const ProjectSkillsWrapper = styled.div`
    width: 80%;
    ${row_justify_start};
    flex-wrap: wrap;
    img{
        width: 25px;
        height: 25px;
        @media (min-width: 768px){
            width: 35px; 
            height: 35px;
        }
        transform: scale(0);
        margin-right: 7px;
    }
`;