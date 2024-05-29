import styled from 'styled-components';
import Button from '../ui/button';
import Image from 'next/image';
import { colors, shadows, links } from '../ui/theme';
import { RiLinkedinBoxFill, RiWhatsappFill } from 'react-icons/ri';
import { RiMenuFill } from 'react-icons/ri';
import { FunctionComponent, ReactNode, useState } from 'react';

type Props = {
    isOpenProp?: boolean;
};

const Slogan: FunctionComponent<Props> = ({ isOpenProp }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Section id='home'>
            <MobileHeader>
                <ul>
                    <li>
                        <Image
                            src='/logo1.svg'
                            width={50}
                            height={50}
                            alt='Logo NN Consulti'
                        />
                    </li>
                    <li>
                        <a href={links.whatsappLink}>
                            <RiWhatsappFill color={'#5aa81d'} size={40} />
                        </a>
                    </li>
                    <li>
                        <a href={links.linkedinLink}>
                            <RiLinkedinBoxFill color={'#247bba'} size={40} />
                        </a>
                    </li>
                </ul>
                <MobileMenuButton onClick={toggleMenu}>
                    <RiMenuFill color={'white'} size={40} />
                </MobileMenuButton>
            </MobileHeader>
            <Header isOpenProp={isOpen}>
                <ul id='logo'>
                    <li>
                        <Image
                            src='/logo1.svg'
                            width={60}
                            height={60}
                            alt='Logo NN Consulti'
                        />
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href='#home'> Home</a>
                    </li>
                    <li>
                        <a href='#differences'>Diferenciais</a>{' '}
                    </li>
                    <li>
                        <a href='#services'>Serviços</a>{' '}
                    </li>
                    <li>
                        <a href='#parceiros'>Marcas Parceiras</a>
                    </li>
                    <li>
                        <a href='#delivery'>Entregas</a>{' '}
                    </li>
                    <li>
                        <a href='#form'>Contato</a>
                    </li>
                </ul>
                <ul id='logo'>
                    <li>
                        <a target='blank' href={links.whatsappLink}>
                            <RiWhatsappFill color={'#5aa81d'} size={45} />
                        </a>
                    </li>
                    <li>
                        <a href={links.linkedinLink} target='blank'>
                            <RiLinkedinBoxFill color={'#247bba'} size={45} />
                        </a>
                    </li>
                </ul>
            </Header>
            <Article>
                <h2>NN Consulti</h2>
                <p>
                    Uma empresa criada para facilitar a vida daqueles que vivem e respiram
                    Tech dia após dia.
                </p>
                <Button
                    isUppercase={true}
                    text='Entre em contato'
                    url={links.whatsappLink}
                    target
                />
            </Article>
        </Section>
    );
};

export default Slogan;

const Section = styled.section`
    color: white;
    flex-direction: column;
    align-content: center;
    align-items: flex-start;
    width: 100%;

    background-image: url("../../../../static/bg.svg");
    max-height: 32em;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    box-sizing: border-box;
    margin: 0;

    button {
        box-shadow: ${shadows.sloganBoxShadow};
    }

    @media (max-width: 768px){
        background - image: url("../../../../static/bg-footer.svg");
        padding-inline: 14px;
    }
    `;

const MobileHeader = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
  }

  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    gap: 10%;
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  position: fixed;
  right: 10px;
  background-color: ${colors.white};
  border: none;
  cursor: pointer;
  border-radius: 10px;
  padding: 10px;
  z-index: 98;

  svg {
    color: ${colors.darkYellow} !important;
  }
`;

const Header = styled.header<{ isOpenProp: boolean }>`
  font-family: 'DM Sans', sans-serif;
  text-transform: uppercase;
  align-self: center;
  display: flex;
  justify-content: space-evenly;
  background-color: ${colors.white};
  width: 100%;
  position: fixed;
  z-index: 99;

  ul {
    list-style: none;
    display: flex;
    gap: 30px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;

    li a {
      text-decoration: none;
      color: ${colors.black};

      &:hover {
        font-weight: 800;
        font-size: 16.5px;
      }
    }
  }

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpenProp ? 'flex' : 'none')};
    padding: 0;
    position: fixed;
    z-index: 99;
    background-color: ${colors.white};
    padding: 10px;
    right: 20%;
    margin: auto;
    width: 50%;
    top: 15px;
    box-shadow: ${shadows.boxShadow};
    height: 50%;

    ul {
        text-align: center;
        display: flex;
        justify-items: center;
        flex-direction: column;
        align-items: center;

      li a {
        color: ${colors.darkYellow};
        font-size: 20px;
      }
    }

    #logo {
      display: none !important;
    }
  }
`;
const Article = styled.article`
    display: flex;
    gap: 5%;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    text-align: left;
    justify-self: center;
    padding-block: 10%;
    box-sizing: border-box;
    
    h2 {
        font-family: "DM Serif Display", serif;
        font-weight: 400;
        font-size: 64px;
        margin: 0;
        text-transform: uppercase;
    }

    p {
        width: 50%;
        text-align: center;
        font-family: 'DM Sans', sans-serif;
        font-size: 32px;
        font-weight: 400;
        letter-spacing: 0.2px;
    }

    @media (max-width: 768px){
        align-items: center;
        align-content: center;
        text-align: center;
        width: auto;
        margin: 0;
        padding-block: 5%;

        h2 {
            font-size: 34px;
        }

        p {
            font-size: 24px;
            width: 100%;
        }
    }
}
`;
