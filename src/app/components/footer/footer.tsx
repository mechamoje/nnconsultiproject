import styled from "styled-components"
import Image from 'next/image';

import { RiWhatsappFill } from "react-icons/ri"
import { colors } from "../ui/theme";

export default function Services() {
    return (
        <Footer>
            <div>
                <Image
                    src="/gtech.svg"
                    width={200}
                    height={200}
                    alt="Picture of the author"
                />
            </div>
            <FlexContainer>
                <ul>
                    <li><a href="#home"> Home</a></li>
                    <li><a href="#differences">Diferenciais</a> </li>
                    <li><a href="#services">Serviços</a> </li>

                </ul>
                <ul>
                    <li><a href="#parceiros">Marcas Parceiras</a></li>
                    <li><a href="#delivery">Entregas</a> </li>
                    <li><a href="#form">Contato</a></li>
                </ul>
            </FlexContainer>
            <div>
                <a href="https://api.whatsapp.com/send?phone=5581991620892&text=Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre:%20"> <RiWhatsappFill color={'white'} size={50} /></a>
            </div>
        </Footer>
    )
}

const Footer = styled.footer`
    background-image: url("../../../../static/bg-footer.svg");
    min-height: 15em;
    background-position: center;
    background-repeat: no-repeat; 
    background-size: cover;
    padding: 0;
    margin: 0; 
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;
    gap: 5em;
    justify-content: space-between;
    padding-inline: 10%;

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 0;
        gap: 2em;
        
        li a {
            text-decoration: none;
            color: white;
            text-transform: uppercase;
            // font:  .links};
            font-size: 0.8em;
            cursor: pointer;

            &:hover {
                color: ${colors.gray};
            }
        }
    }

    @media (max-width: 768px){
        align-items: center;
        flex-direction: column;
        gap: 2em;
        padding-bottom: 2%;
        }
`

const FlexContainer = styled.div`
    display: flex;
    gap: 3em;
`