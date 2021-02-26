import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Header from '../../components/Header';
import SubHeader from '../../components/Sub-Header';

import Chat from '../../components/Chat';
import EnviaMensagem from '../../components/Envia-Mensagem';

const FaleConosco = () => {
    return (
        <div className="FaleConosco">
            <Header/>
            <SubHeader titulo="Fale Conosco"/>
            <div className="mt-5" style={{width: "500px"}}/>
            <Row>
                <Col>
                    <Row>
                        <Col xl={{ offset: 1 }} md={10} sm={10}>
                            <EnviaMensagem/>
                        </Col>
                    </Row>            
                </Col>
                <Col>
                    <Row>
                        <Chat/>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default FaleConosco;