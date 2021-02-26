import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';

import { postMensagem } from '../../services';

const EnviaMensagem = () => {

    const [nome,setNome] = useState('');
    const [email,setEmail] = useState('');
    const [mensagem,setMensagem] = useState('');

    const resetForm = () => {
        setNome('')
        setEmail('')
        setMensagem('')
    }

    const submit = (e) => {
        e.preventDefault();

        const data = {
            'nome': nome,
            'email': email,
            'mensagem': mensagem
        }

        postMensagem(data);
        toast.success('Mensagem enviada com sucesso!');

        resetForm();

    }

    return (
        <Container>
            <Form onSubmit={submit}>
                <Form.Group>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="digite seu nome" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} required/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="digite seu e-mail" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                    Nós não compartilhamos seu e-mail.
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Mensagem</Form.Label>
                    <Form.Control as="textarea" name="mensagem" value={mensagem} onChange={(e) => setMensagem(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit" >Enviar</Button>
                <ToastContainer />
            </Form>
        </Container>
    )
}

export default EnviaMensagem
