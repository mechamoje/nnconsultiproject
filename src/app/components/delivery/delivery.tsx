import styled from "styled-components";
import Button from "../ui/button";
import SectionTitle from "../ui/sectionTitle";
import Image from 'next/image'
import { useEffect, useState } from "react";

export default function Entrega() {
    const [size, setSize] = useState(500);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setSize(380)
            } else {
                setSize(500)
            }
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <Section id='delivery'>
            <Container>
                <h2>
                    Entregamos com compromisso e agilidade em todo o Brasil com frete grátis!
                </h2>

                <Button text="Entre em contato" url="https://api.whatsapp.com/send?phone=5581991620892&text=Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre:%20" ></Button>
                <small> Exceto para a região Norte. </small>
            </Container>
            <figure>
                <Image
                    src="/mapaazul.svg"
                    width={size}
                    height={size}
                    alt="Picture of the author"
                />
            </figure>

        </Section>
    )
}

const Section = styled.section`
    display: flex;
    gap: 14px;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: center;

    h2 {
        font-size: 34px;
        max-width: 15em;
    }

    @media (max-width: 768px){
        display: flex;
        flex-direction: column;

        h2 {
            text-align: center
        }
        }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    small {
        margin-top: 3%;
    }

    @media (max-width: 768px){
        align-items: center;
        }
`