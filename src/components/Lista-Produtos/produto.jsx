import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const MyDiv = styled.div`
    margin-top: 5px;
    margin-bottom: 5px;
`;





const Produto = (props) => {

    const showTitle = (title) => {
        if (title.length > 30){
            return title.slice(0,30) + '...'
        }else{
            return title
        }
    }

    const [shadow,setShadow] = useState(false);
    const [className,setClassName] = useState('');


    const controlShadow = (e) => {
        if (!shadow){
            setClassName("shadow-lg p-3 mb-5 bg-white rounded");
        }else{
            setClassName('');
        }
        setShadow(!shadow)
    }


    return (
        <MyDiv>
            <Card style={{ width: '15rem' }} className={className} border="light" onMouseOver={(e) => controlShadow(e)} onMouseOut={(e) => controlShadow(e)}>
                <Card.Img className="justify-content-center" variant="top" src={props.imagem} style={{maxWidth: '200px', maxHeight: '150px',width: 'auto', height: 'auto'}}/>
                <Card.Body>
                    <Card.Title className="font-weight-light">{showTitle(props.nome_produto)}</Card.Title>
                    <Card.Text className="text-secondary">de R$ {props.preco.toFixed(2)} por</Card.Text>
                    <Card.Text><span style={{fontSize : '150%', fontWeight: 'bold'}}>R$ {props.preco_com_desconto.toFixed(2)}</span> à vista</Card.Text>
                </Card.Body>
            </Card>
        </MyDiv>
    )
}

export default Produto;
