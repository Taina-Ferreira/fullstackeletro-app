import React from 'react';
import styled from 'styled-components';

import { Row, Container } from 'react-bootstrap';

const Hp = styled.h2`
    margin-top: 5px;
    margin-bottom: 5px;
`;


export const SubHeader = (props) => {
    return (
        <div>
            <Container>
                <Row>
                    <Hp>{props.titulo}</Hp>
                </Row>
            </Container>
            <hr className='my-2'/>
        </div>
    )
}
