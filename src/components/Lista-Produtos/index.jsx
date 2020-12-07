import React, { useState, useEffect } from 'react'
import { CardDeck, Col, Container } from 'react-bootstrap';


import Produto from './produto';
import {getProdutos} from '../../services';


const ListaProdutos = (props) => {
    
    const [produtos, setProdutos] = useState([]);

    useEffect (()  => {
        getProdutos()
            .then((data) => setProdutos(data))
            .catch((e) => {
                console.log(e);
                setProdutos([]);
            })
    },[]);
    
    if (props.categoria){
        return (
            <Container>
                <CardDeck>
                    {produtos.filter((p) => p.id_categoria === props.categoria).map((produto,index) => {
                        return (
                            <Col xl={3} key={index}>
                                <Produto 
                                    key={index}
                                    imagem={produto.imagem}
                                    nome_produto={produto.nome_produto}
                                    preco={produto.preco}
                                    preco_com_desconto={produto.preco_com_desconto}
                                />
                            </Col>);
                    })}
                </CardDeck>
            </Container>
        )
    }
    return (
        <Container>
            <CardDeck>
                {produtos.map( (produto,index) => {
                    return (
                        <Col xl={3} key={index}>
                            <Produto 
                                key={index}
                                imagem={produto.imagem}
                                nome_produto={produto.nome_produto}
                                preco={produto.preco}
                                preco_com_desconto={produto.preco_com_desconto}
                            />
                        </Col>);
                })}
            </CardDeck>
        </Container>
    )
}

export default ListaProdutos;