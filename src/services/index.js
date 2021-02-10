const urlBase = 'http://localhost:4000/';

export const getCategorias = async () => {
    const apiUrl = urlBase + 'categorias/';
    return fetch(apiUrl)
            .then((response) => response.json())
}

export const postProdutos = async (body) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };

    const apiUrl = urlBase + 'produtos/';

    return fetch(apiUrl, requestOptions)
        .then(response => response.json());
}

export const getProdutos = async () => {
    const apiUrl = urlBase + 'produtos/';
    return fetch(apiUrl)
            .then((response) => response.json())
}