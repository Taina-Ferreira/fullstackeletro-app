import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import {Header} from '../../components/Header';
import {SubHeader} from '../../components/Sub-Header';

const NossasLojas = () => {
    return (
        <div className="NossasLojas">
            <Header/>
            <SubHeader titulo="Nossas Lojas"/>
            <div className="mt-5" style={{width: "500px"}}/>
            <Container>
                <Row>
                    <Col xl={3}>
                        <h3>Rio de Janeiro</h3>
                        <p>Avenida Presidente Vargas, 5000</p>
                        <p>10&ordm; andar</p>
                        <p>Centro</p>
                        <p>(21) 3333-3333</p>

                    </Col>
                    <Col xl={3}>
                        <h3>São Paulo</h3>
                        <p>Avenida Paulista, 985</p>
                        <p>3 &ordm; andar</p>
                        <p>Jardins</p>
                        <p>(11) 4444-4444</p>
                    </Col>

                    <Col xl={3}>
                        <h3>Santa Catarina</h3>
                        <p>Rua Major &Aacute; vila, 370</p>
                        <p>Vila Mariana</p>
                        <p>(47) 5555-5555</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default NossasLojas
