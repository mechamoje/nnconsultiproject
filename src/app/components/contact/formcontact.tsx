import { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import Image from 'next/image';
import styled from "styled-components";
import { colors, shadows } from "../ui/theme";
import { FormControl, FormHelperText, Input, InputLabel, TextField, TextareaAutosize } from '@mui/material';
import Button from "../ui/button";

export const Contact = () => {

    const [size, setSize] = useState(600);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setSize(380)
            } else {
                setSize(600)
            }
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });

    const { user_name, user_email, message } = formData;

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (user_name === '' || user_email === '' || message === '') {
            return alert('Por favor, preencha todos os campos do formulário.');
        } else {
            sendEmail(e)
            return console.log('Formulário enviado:', formData);
        }
    };


    function sendEmail(e: any) {
        e.preventDefault();
        emailjs.sendForm('service_sal12fr', 'template_78nsy7i', '#form', 'w19xbDkAnMHMiJUfb')
            .then((response) => {
                window.alert('Mensagem enviada com sucesso! ✅ Aguarde a devolutiva, ou nos contate via whatsapp (81)9 9162-0892.');
            }, (error) => {
                window.alert('Erro ao enviar sua mensagem. ❌ Por favor tente novamente ou nos contate via whatsapp (81)9 9162-0892.');
            });
    };

    return (
        <Section id='form'>
            < Form onSubmit={handleSubmit} id='form' >
                <InputsContainers>
                    <InputLabel htmlFor="my-input">Nome da empresa:</InputLabel>
                    <Input fullWidth id="my-input" aria-describedby="my-helper-text" name="user_name" value={user_name} onChange={handleChange} placeholder="NNConsulti" />
                </InputsContainers>
                <InputsContainers>
                    <InputLabel htmlFor="my-input">Emal: </InputLabel>
                    <Input fullWidth id="my-input" aria-describedby="my-helper-text" name="user_email" value={user_email} onChange={handleChange} placeholder="nildete@nnconsulti.com.br" />
                    <FormHelperText id="my-helper-text"> Não iremos compartilhar seu email.</FormHelperText>
                </InputsContainers>

                <InputsContainers>
                    <TextField fullWidth id="outlined-basic" name="message" label="Como podemos te ajudar? " variant="outlined" value={message} onChange={handleChange} placeholder="Gostaria de informações sobre suas condições comerciais" />
                </InputsContainers>

                <Button onSubmit={handleSubmit} type="submit" text={"Enviar"} />
            </Form >
            <figure>
                <Image
                    src="/contact.svg"
                    width={size}
                    height={size}
                    alt="Ilustração com imagens de e-mail e celular"
                />
            </figure>
        </Section >

    );
};

const Section = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-evenly;
    align-items: center;
    margin-inline: 10%;

    @media (max-width: 768px){
        display: flex;
        align-items: center;
        flex-direction: column-reverse;
        padding: 0;
        padding-inline: 10%;
        align-items: center;
        align-self: stretch;
        }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background-color: ${colors.lighterGray};
    padding: 14px;
    border-radius: 10px;
    height: 80%;
    justify-content: inherit;

    input {
        padding: 10px;
    }

    input[name="message"] {
        height: 3.4375em !important; 
    }
`

const InputsContainers = styled.div`    
    margin-bottom: 20px;

`

