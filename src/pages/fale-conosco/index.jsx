import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {Header} from '../../components/Header';
import {SubHeader} from '../../components/Sub-Header';

const FaleConosco = () => {
    return (
        <div className="FaleConosco">
            <Header/>
            <SubHeader titulo="Fale Conosco"/>
            <div className="mt-5" style={{width: "500px"}}/>
            <Row>
                <Col xl={{ span: 4, offset: 4 }} md={10} sm={10}>
                    <Container>
                        <Form>
                            <Form.Group>
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" placeholder="digite seu nome" required/>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control type="email" placeholder="digite seu e-mail" />
                                <Form.Text className="text-muted">
                                Nós não compartilhamos seu e-mail.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Mensagem</Form.Label>
                                <Form.Control as="textarea"/>
                            </Form.Group>
                            <Button variant="primary" type="submit">Enviar</Button>
                        </Form>
                    </Container>
                </Col>
            </Row>
        </div>
    )
}

export default FaleConosco;