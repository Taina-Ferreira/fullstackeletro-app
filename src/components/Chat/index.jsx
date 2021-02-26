import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container, Row } from 'react-bootstrap'

import {getMensagens} from '../../services';

const Balao = styled.div`
    background:#e5e5e5; 
    padding:15px; 
    position:relative; 
    top:20px; 
    left:120px; 
    width:50%; 
    float:left;

    :before{ 
        content:''; 
        position: absolute; 
        width:20px; 
        height:20px; 
        left:-10px; 
        top:25px; 
        background:#e5e5e5; 
        -webkit-transform:rotate(45deg); 
    }
`;


const User = styled.strong` 
    color: #284b63 ;
`;

const Mensagem = styled.p` 
    color: #212529;
`;



const Chat = () => {

    const [mensagens, setMensagens] = useState([
        {
            user: "wesley (wesley@gmail.com)",
            body: "Meu produto chegou muito rápido!"
        },
        {
            user: "Tainas (tainas@gmail.com)",
            body: "Excelente atendimento!"
        }
    ])


    useEffect (()  => {
        getMensagens()
            .then((data) => setMensagens(data))
            .catch((e) => {
                console.log(e);
            })
    },[]);

    const ListaMensagens = mensagens.map((mensagem, i) => {
        return (
            <Row className="p-1" key={i}>
                <Balao>
                    <User>{mensagem.nome} ({mensagem.email})</User>
                    <Mensagem>{mensagem.mensagem}</Mensagem>
                </Balao>
            </Row>
        )
    })

    return (
        <Container style={{height: "400px", overflowY: "scroll"}}>
            {ListaMensagens}
        </Container>       
    )

}

export default Chat
