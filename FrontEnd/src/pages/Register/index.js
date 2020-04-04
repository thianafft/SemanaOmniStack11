import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault(); 
        
   const data ={
    name,
    email,
    whatsapp,
    city,
    uf,
   };

   try {
   const response = await api.post('ongs', data);
   
    alert(`Seu ID de acesso: ${response.data.id}`);
    
    history.push('/');
    } catch (err) {
     alert('Erro no cadastro, tente novamente.');   
    }    
}

return (
    <div className="register-container">
    <div className="content">
        <section>
        <img src={logoImg} className='shadow' alt="Be The Hero" />

         <h1>Cadastro</h1>
         <p>Faça seu cadastro, acesse a plataforma e seja um Herói</p>

         <Link className="back-link" to="/"><FiArrowLeft size={17} color="#E02041"/>Voltar</Link>
        </section>

        <form onSubmit={handleRegister}>
            <input placeholder="Nome da ONG" 
                value={name}
                onChange={e => setName(e.target.value)}
            />
        <input type="email" placeholder="E-mail" 
            value={email}
            onChange={e => setEmail(e.target.value)}
        />
        <input type="text" placeholder="Whatsapp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
        />

<div className="input-group">
        <input type="text" placeholder="Cidade" 
        value={city}
        onChange={e => setCity(e.target.value)}
        />
        <input type="text" placeholder="UF" maxLength='2' style={{ width: 80 }} 
        value={uf}
        onChange={e => setUf(e.target.value)}
        />
</div>

<button className="button" type="submit">Cadastrar</button>      
       
        </form>
    </div>
    </div>
);
}