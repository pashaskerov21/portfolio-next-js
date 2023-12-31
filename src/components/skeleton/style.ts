import styled, { css, keyframes } from "styled-components";


type SkeletonElementProps = {
    $width?: string,
    $width_sm?: string,
    $width_md?: string,
    $width_lg?: string,
    $width_xl?: string,
    $width_xxl?: string,
    $height?: string,
    $height_sm?: string,
    $height_md?: string,
    $height_lg?: string,
    $height_xl?: string,
    $height_xxl?: string,
    $radius?: string,
    $margin?: string,
    $padding?: string,
}
const skeletonAnimation = keyframes`
    0%{
        opacity: 0.2;
    }
    50%{
        opacity: 1;
    }
    100%{
        opacity: 0.2;
    }
`
export const SkeletonElement = styled.div<SkeletonElementProps>`
    display: block;
    user-select: none;
    pointer-events: none;
    position: relative;
    overflow: hidden;
    border-radius: ${props => props.$radius ? props.$radius : '0'};
    background-color: ${props => props.theme.skeleton_bg_color};
    animation: ${skeletonAnimation} 1.5s ease-out infinite;
    ${props => props.$margin && css`margin: ${props.$margin};`}; 
    ${props => props.$padding && css`padding: ${props.$padding}`};
    ${props => props.$width && css`width: ${props.$width}`};
    ${props => props.$width_sm && css`@media (width >= 576px){width: ${props.$width_sm};}`};
    ${props => props.$width_md && css`@media (width >= 768px){width: ${props.$width_md};}`};
    ${props => props.$width_lg && css`@media (width >= 992px){width: ${props.$width_lg};}`};
    ${props => props.$width_xl && css`@media (width >= 1200px){width: ${props.$width_xl};}`};
    ${props => props.$width_xxl && css`@media (width >= 1400px){width: ${props.$width_xxl};}`};
    ${props => props.$height && css`height: ${props.$height};`};
    ${props => props.$height_sm && css`@media (width >= 576px){height: ${props.$height_sm};}`};
    ${props => props.$height_md && css`@media (width >= 768px){height: ${props.$height_md};}`};
    ${props => props.$height_lg && css`@media (width >= 992px){height: ${props.$height_lg};}`};
    ${props => props.$height_xl && css`@media (width >= 1200px){height: ${props.$height_xl};}`};
    ${props => props.$height_xxl && css`@media (width >= 1400px){height: ${props.$height_xxl};}`};
`;

