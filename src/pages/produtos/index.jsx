import React, { useState, Suspense  } from 'react';

import { Container, Col, Row } from 'react-bootstrap';

import { RotateCircleLoading } from 'react-loadingg';

const  Header = React.lazy(() => import('../../components/Header'));
const  Footer = React.lazy(() => import('../../components/Footer'));
const  ListaProdutos = React.lazy(() => import('../../components/Lista-Produtos'));
const  ClasseProdutos = React.lazy(() => import('../../components/Classe-Produtos'));
const SubHeader = React.lazy (() => import ('../../components/Sub-Header'));


const PageProdutos = () => {

    const [categoria,setCategoria] = useState(false);

    return (
        <div className="produtos">
            <Suspense fallback={<RotateCircleLoading />}>
                <Header/>
            </Suspense>
            <Suspense fallback={<RotateCircleLoading/>}>
            <SubHeader titulo="Produtos"/>
            </Suspense>
            

            <Container fluid>
                <Row>
                    <Col xs={2} xl={2} sm={6}>
                        <Container>
                            <Suspense fallback={<RotateCircleLoading />}>
                                <ClasseProdutos alterarCategoria={setCategoria}/>
                            </Suspense>
                        </Container>
                    </Col>
                    <Col>
                        <Container>
                            <Suspense fallback={<RotateCircleLoading />}>
                                <ListaProdutos categoria={categoria}/>
                            </Suspense>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <Suspense fallback={<RotateCircleLoading />}>
            <Footer/>
            </Suspense>
        </div>
    )
}

export default PageProdutos;