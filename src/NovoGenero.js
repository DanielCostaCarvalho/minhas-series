import React, { useState } from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

const NovoGenero = () => {
    const [name, setName] = useState('');
    const [success, setSuccess] = useState(false);

    const onChange = evt => {
        setName(evt.target.value);
    };

    const save = () => {
        axios
            .post('/api/genres', {
                name,
            })
            .then(res => {
                setSuccess(true);
            });
    };

    if(success){
        return <Redirect to='/generos'/>
    }

    return (
        <div className='container'>
            <h1>Novo Gênero</h1>
            <form>
                <div className="form-group">
                    <label htmlFor='name'>Nome</label>
                    <input type='text' value={name} onChange={onChange} className='form-control' id='name' placeholder='Nome do gênero'/>
                </div>
                <Button color='secondary' onClick={save}>Salvar</Button>
            </form>        
        </div>
    )
}

export default NovoGenero;