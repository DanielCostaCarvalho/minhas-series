import React, { useState, useEffect } from 'react';
import { Button, Alert } from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Generos = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get('/api/genres')
            .then(res => {
                setData(res.data.data);
            })
    }, [])

    const renderizaLinha = row => {
        return (
        <tr key={row.id}>
            <th scope='row'>{row.id}</th>
            <td>{row.name}</td>
            <td>
            <Button outline color='warning' tag={Link} to={'generos/' + row.id}>Editar</Button>
            <Button outline color='danger' onClick={() => deletarGenero(row.id)}>Deletar</Button>
            </td>
        </tr>
        );
    };

    const deletarGenero = (id) => {
        axios
            .delete('/api/genres/' + id)
            .then(res => {
                const newData = data.filter(row => {
                    return row.id !== id;
                })
                setData(newData)
            })
    };

    if(data.length === 0){
        return(
            <div className='container'>
                <h1>Gêneros <Button outline color='secondary' tag={Link} to='/generos/novo'>Novo Gênero</Button></h1>
                <Button outline color='secondary'>Novo Gênero</Button>
                <Alert color="dark">
                    Você não possui gêneros criados
                </Alert>
            </div>
        );
    }

    return (
    <div className='container'>
    <h1>Gêneros <Button outline color='secondary' tag={Link} to='/generos/novo'>Novo Gênero</Button></h1>
    <table className='table table-striped table-hover' >
        <thead>
            <tr>
                <th scope='col'>#</th>
                <th scope='col'>Nome</th>
                <th scope='col'>Ações</th>
            </tr>
        </thead>
        <tbody>
            {data.map(renderizaLinha)}
        </tbody>
    </table>
    </div>
    );
};

export default Generos;