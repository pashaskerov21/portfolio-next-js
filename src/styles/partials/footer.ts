import styled from "styled-components";
import { row_center } from "../mixin";

export const FooterContainer = styled.footer`
    width: 100%;
    ${row_center};
    padding: 20px;
    background-color: ${props => props.theme.primaryColor};
`;