import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Header from '../../components/Header';
import SubHeader from '../../components/Sub-Header';

import {FormCadProd} from '../../components/Form-Cadastro-Produtos'

const PageCadastroProdutos = () => {

    return (
        <div>
            <Header/>
            <SubHeader titulo="Cadastro de produtos"/>
            <Row>
                <Container className="justify-content-center">
                    <Col xl={{ span: 8, offset: 2 }} md={10} sm={10}>
                        <FormCadProd/>
                    </Col>
                </Container>
            </Row>
        </div>
    )
}

export default PageCadastroProdutos;