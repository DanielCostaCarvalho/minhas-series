import React, { useState, useEffect } from 'react';
import { Button, Alert } from 'reactstrap';
import axios from 'axios';

const renderizaLinha = row => {
    return (
    <tr key={row.id}>
        <th scope='row'>{row.id}</th>
        <td>{row.name}</td>
        <td><Button outline color='secondary'>Adicionar</Button></td>
    </tr>
    )
}

const Generos = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get('/api/genres')
            .then(res => {
                setData(res.data.data);
            })
    }, [])

    if(data.length === 0){
        return(
            <div className='container'>
                <h1>Gêneros</h1>
                <Alert color="dark">
                    Você não possui gêneros criados
                </Alert>
            </div>
        )
    }

    return (
    <div className='container'>
    <h1>Gêneros</h1>
    <table className='table table-striped' >
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