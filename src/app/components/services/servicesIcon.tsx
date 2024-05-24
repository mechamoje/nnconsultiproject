import styled from "styled-components";
import { colors } from "../ui/theme";
import { ReactElement, JSXElementConstructor } from "react";

export default function ServicesIcon(icon: ReactElement<any, string | JSXElementConstructor<any>>, title: string, onClick: any) {
    return (
        <IconContainer id='services' onClick={onClick}>
            {icon}
            <span> {title} </span>
        </IconContainer>
    );
}

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-block: 10px;

    svg {
        width: 74px;
        height: 38px;
        background-color: ${colors.white};
        border-radius: 50%;
        padding: 10px;

        &:hover {
            background-color: ${colors.yellow};
        }
    }

    span {
        margin-top: 24px;
        font-size: 20px;
    }
`
