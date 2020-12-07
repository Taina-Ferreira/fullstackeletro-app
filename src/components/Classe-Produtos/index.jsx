import React, { useEffect, useState  } from 'react'
import styled from 'styled-components';

import {getCategorias} from '../../services';

const Categorias = styled.section`

`;

const StyLi = styled.li`
   padding: 5px;
   list-style: none;
   text-decoration-line: none;
   :hover{
    cursor: pointer;
    color: white;
    background-color: #007BFF;
    font-weight: bolder;
   }
`;

const StyU = styled.u`
   padding: 5px;
   list-style: none;
   text-decoration-line: none;
`;


const ClasseProdutos = (props) => {


    const [categorias, setCategorias] = useState([]);

    useEffect (()  => {
        getCategorias()
            .then((data) => {
                setCategorias(data);
                console.log(data)
            })
            .catch((e) => {
                console.log(e);
                setCategorias([]);
            })
    },[]);


    return (
        <div>
            <h3>Categorias</h3>
            <Categorias>
                <StyU>
                    <StyLi onClick={(e) => {props.alterarCategoria(false)}}>Todos</StyLi>
                    {categorias.map(
                        (cat,index) => (<StyLi  key={index} onClick={(e) => {props.alterarCategoria(e.target.innerText)}} value={cat.id_categoria}>{cat.categoria}</StyLi>)
                    )}
                </StyU>
            </Categorias>
        </div>
    )
}

export default ClasseProdutos;
