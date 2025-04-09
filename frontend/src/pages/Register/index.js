import React from 'react';
import './register.css';

const Register = () => {
  return (
    <div className='box-central'>
      <h1>AGENDÁRIO</h1>
      <p>Crie sua conta agora e começe seu negócio de forma muito mais organizada</p>
      <div className='box-cad'>
        <h2>Cadastre-se</h2>
        
        <div className='input-area'>
          <input className='inputt' type='text' id='name' autoComplete='off' placeholder=''/>
          <label for='name' className='label-line'>Nome</label>
        </div>
        <div className='input-area'>
          <input className='inputt' type='email' id='email' autoComplete='off' placeholder=''/>
          <label for='email' className='label-line'>Email</label>
        </div>
        <div className='input-area'>
          <input className='inputt' type='password' id='senha' autoComplete='off' placeholder=''/>
          <label for='senha' className='label-line'>Senha</label>
        </div>

        <a href='/'><button>Criar conta</button></a>
      </div>
    </div>
    );
};

export default Register;
