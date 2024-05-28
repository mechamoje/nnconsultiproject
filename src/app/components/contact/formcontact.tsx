import { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import Image from 'next/image';
import styled from 'styled-components';
import { colors, shadows } from '../ui/theme';
import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextField,
} from '@mui/material';
import Button from '../ui/button';
import { useSelector } from 'react-redux';

export const Contact = () => {
  const { title } = useSelector(
    (rootReducer: any) => rootReducer.servicesReducer
  );

  const [size, setSize] = useState(600);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth < 768 ? 380 : 600);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const formText = `Olá, gostaria de mais informações sobre ${title || 'seus serviços'}`;

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: formText,
  });

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      message: `Olá, gostaria de mais informações sobre ${title || 'seus serviços'}`,
    }));
  }, [title]);

  const { user_name, user_email, message } = formData;

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (user_name === '' || user_email === '' || message === '') {
      return alert('Por favor, preencha todos os campos do formulário.');
    } else {
      sendEmail(e);
      console.log('Formulário enviado:', formData);
    }
  };

  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_uofhok1',
        'template_8jc32ye',
        '#myform',
        'w19xbDkAnMHMiJUfb'
      )
      .then(
        () => {
          window.alert(
            'Mensagem enviada com sucesso! ✅ Aguarde a devolutiva, ou nos contate via whatsapp (81)9 9162-0892.'
          );
        },
        () => {
          window.alert(
            'Erro ao enviar sua mensagem. ❌ Por favor tente novamente ou nos contate via whatsapp (41) 98786-6558.'
          );
        }
      );
  };

  return (
    <Section id='form'>
      <Form onSubmit={handleSubmit} id='myform'>
        <InputsContainers>
          <InputLabel htmlFor='my-input'>Nome da empresa:</InputLabel>
          <Input
            fullWidth
            id='my-input'
            aria-describedby='my-helper-text'
            name='user_name'
            value={user_name}
            onChange={handleChange}
            placeholder='NNConsulti'
          />
        </InputsContainers>
        <InputsContainers>
          <InputLabel htmlFor='my-input'>Email:</InputLabel>
          <Input
            fullWidth
            id='my-input'
            aria-describedby='my-helper-text'
            name='user_email'
            value={user_email}
            onChange={handleChange}
            placeholder='nildete@nnconsulti.com.br'
          />
          <FormHelperText id='my-helper-text'>
            {' '}
            Não iremos compartilhar seu email.
          </FormHelperText>
        </InputsContainers>
        <InputsContainers>
          <TextField
            fullWidth
            id='outlined-basic'
            name='message'
            label='Como podemos te ajudar?'
            variant='outlined'
            value={message}
            onChange={handleChange}
          />
        </InputsContainers>
        <Button onSubmit={handleSubmit} type='submit' text={'Enviar'} />
      </Form>
      <figure>
        <Image
          src='/contact.svg'
          width={size}
          height={size}
          alt='Ilustração com imagens de e-mail e celular'
        />
      </figure>
    </Section>
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

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    padding: 0;
    padding-inline: 10%;
    align-items: center;
    align-self: stretch;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: ${colors.white};
  padding: 14px;
  border-radius: 10px;
  height: 80%;
  justify-content: inherit;

  label, input {
    font-family: 'DM Sans', sans-serif !important;
  }

  input {
    padding: 10px;
    box-shadow: ${shadows.inputsShadow};
  }

  input[name='message'] {
    height: 3.4375em !important;
  }
`;

const InputsContainers = styled.div`
  margin-bottom: 20px;
`;
