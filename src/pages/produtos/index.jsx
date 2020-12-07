import React, { useState } from 'react';

import { Container, Col, Row } from 'react-bootstrap';


import {Header} from '../../components/Header';
import {Footer} from '../../components/Footer';
import {SubHeader} from '../../components/Sub-Header';
import ClasseProdutos from '../../components/Classe-Produtos';
import ListaProdutos from '../../components/Lista-Produtos';




const PageProdutos = () => {

    const [categoria,setCategoria] = useState(false);

    return (
        <div className="produtos">
            <Header/>
            <SubHeader titulo="Produtos"/>
            <Container fluid>
                <Row>
                    <Col xs={2} xl={2} sm={6}>
                        <Container>
                            <ClasseProdutos alterarCategoria={setCategoria}/>
                        </Container>
                    </Col>
                    <Col>
                        <Container>
                            <ListaProdutos categoria={categoria}/>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    )
}

export default PageProdutos;