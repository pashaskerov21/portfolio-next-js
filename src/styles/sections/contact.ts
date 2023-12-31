import styled, { css } from "styled-components";
import { column_center } from "../mixin";

export const ContactWrapper = styled.div`
    width: 100%;
    ${column_center};
`;

export const ContactFormWrapper = styled.div`
    width: 100%;
    max-width: 800px;
    ${column_center};
    form{
        width: 100%;
        ${column_center};
        gap: 30px;
    }

`;

type FormItemProps = {
    $inputFocus: boolean,
    $inputError: boolean
}

export const FormItem = styled.div<FormItemProps>`
    width: 100%;
    position: relative;
    textarea{
        resize: none;
        height: 200px;
    }
    input,
    textarea{
        width: 100%;
        border: none;
        outline: none;
        background-color: ${props => props.theme.background};;
        min-height: 60px;
        border-radius: 10px;
        padding: 12px 20px;
        color: ${props => props.theme.text};
        font-size: 18px;
        box-shadow: 0 0 10px ${props => props.theme.primaryColor};
        border: 1px solid ${props => props.theme.primaryColor};
        transition: all 0.3s;
        font-family: 'Montserrat', sans-serif;
        ${
            props => props.$inputError && css`
                border: 1px solid #dc3545;
                box-shadow: 0 0 10px #dc3545;
            `
        }
        &:focus{
            box-shadow: 0 0 40px ${props => props.theme.primaryColor};
            border: 1px solid ${props => props.theme.primaryColor};
            ${
                props => props.$inputError && css`
                    border: 1px solid #dc3545;
                    box-shadow: 0 0 40px #dc3545;
                `
            }
            ~span{
                position: absolute;
                top: 0;
                left: 0;
                font-size: 12px;
                transform: translate(20px, -70%);
                background-color: ${props => props.theme.background};
                padding: 5px 12px;
                border-radius: 3px;
                border: 1px solid ${props => props.theme.primaryColor};
                box-shadow: 0 0 5px ${props => props.theme.primaryColor};
                ${
                    props => props.$inputError && css`
                        border: 1px solid #dc3545;
                        box-shadow: 0 0 50px #dc3545;
                    `
                }
            }
        }
    }
    span{
        user-select: none;
        pointer-events: none;
        ${
            props => props.$inputFocus ? css`
                position: absolute;
                top: 0;
                left: 0;
                font-size: 12px;
                transform: translate(20px, -70%);
                background-color: ${props => props.theme.background};
                padding: 5px 12px;
                border-radius: 3px;
                border: 1px solid ${props => props.theme.primaryColor};
                box-shadow: 0 0 5px ${props => props.theme.primaryColor};
                ${
                    props.$inputError && css`
                        border: 1px solid #dc3545;
                        box-shadow: 0 0 50px #dc3545;
                    `
                }
                
            ` : css`
                position: absolute;
                top: 18px;
                left: 20px;
                transition: all 0.2s;
                display: block;
            `
        }
        
    }
`;

