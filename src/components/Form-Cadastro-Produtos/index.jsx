import React, { useState,useEffect } from 'react';
import {Form, Button } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

import {getCategorias, postProdutos} from '../../services';


export const FormCadProd = () => {

    const [imagem,setImagem] = useState({ 'isValidImage': false, name: 'Selecione a imagem do produto' });
    const [blobImage,setBlobImage] = useState();

    const toBase64 = async (file) => {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const result = reader.result;
            setBlobImage(result);
            console.log("B64",Date.now());
        };
        reader.onerror = (error) => {
          console.log('Error: ', error);
        };
     }

    const validaImagem = (event) => {
        const validImageTypes = ['image/gif', 'image/jpeg', 'image/png', 'image/webp'];
        
        const _imagem = event.target.files[0];

        if (validImageTypes.includes(_imagem['type'])){
            setImagem(_imagem)
            toBase64(_imagem)
        }else{
            setImagem({ 'isValidImage': false, 'name': 'O Arquivo deve ser uma mensagem' })
        }
    }

    const [categorias,setCategorias] = useState([]);

    useEffect (()  => {
        getCategorias()
            .then((data) => setCategorias(data))
            .catch((e) => {
                console.log(e);
                setCategorias([]);
            });
    },[]);

    const [nomeProduto,setProduto] = useState('');
    const [categoria,setCategoria] = useState(0);
    const [preco,setPreco] = useState();
    const [precoComDesconto,setPrecoComDesconto] = useState();
    const [descricao,setDescricao] = useState('');

    const submit = (e) => {
        e.preventDefault();

        const data = {
            'id_categoria': categoria,
            'nome_produto': nomeProduto,
            'descricao': descricao,
            'preco': parseFloat(preco),
            'preco_com_desconto': parseFloat(precoComDesconto),
            'imagem': blobImage
        }

        console.log("Put",Date.now());
        console.log(data)

        postProdutos(data);
        toast.success('Produto Cadastrado com sucesso!');

        resetForm();

    }

    const resetForm = () =>{
        setCategoria('');
        setProduto('');
        setPreco('');
        setPrecoComDesconto('');
        setDescricao('');
        setImagem({ 'isValidImage': false, name: 'Selecione a imagem do produto' });
        setBlobImage(undefined);
    }

    return (
        <Form onSubmit={submit}>
            <Form.Group controlId="Categoria de produtos">
                <Form.Label>Selecione a categoria do produto</Form.Label>
                <Form.Control as="select" value={categoria} onChange={(e) => setCategoria(e.target.value)} required>
                    <option value={0}></option>
                    {categorias.map(
                        (cat,index) => (<option key={index} value={cat.id_categoria}>{cat.categoria}</option>)                
                    )}
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Nome do produto</Form.Label>
                <Form.Control type="text" placeholder="Produto" value={nomeProduto} onChange={(e) => setProduto(e.target.value)} required/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Preço</Form.Label>
                <Form.Control type="number" placeholder="Preço" step="any" value={preco} onChange={(e) => setPreco(e.target.value)} required/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Preço com desconto</Form.Label>
                <Form.Control type="number" placeholder="Preço com desconto" step="any" value={precoComDesconto} onChange={(e) => setPrecoComDesconto(e.target.value)} required/>
            </Form.Group>
            <Form.Group>
                <Form.File id="formcheck-api-custom" custom>
                    <Form.File.Input isValid={imagem.isValidImage} onChange={(e) => validaImagem(e)} accept="image/x-png,image/gif,image/jpeg,image/webp" />
                    <Form.File.Label data-browse="Adicionar imagem">
                        {imagem.name}
                    </Form.File.Label>
                    <Form.Control.Feedback type="valid">Imagem Aceita!</Form.Control.Feedback>
                </Form.File>
            </Form.Group>
            <Form.Group>
                <Form.Label>Descrição do Produto</Form.Label>
                <Form.Control as="textarea" value={descricao} onChange={(e) => setDescricao(e.target.value)}/>
            </Form.Group>
            <Form.Group>
                <Button variant="primary" type="submit">
                    Cadastrar
                </Button>
            </Form.Group>
            <ToastContainer />
        </Form>
    )
}