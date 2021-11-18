import React from 'react';
import './tela.css';

export default function Tela (){
    return(
        <div className='tela'>
        <h1 className='cadastro'>Cadastro</h1>
        <p className='paragrafo'>Insira seus dados. </p>
        <form action="">
            <input type="text" placeholder='Nome' id='nome' name='nome' maxLength='12' />
            <br />
            <input type="text" placeholder='Sobrenome' id='sobrenome' name='sobrenome' maxLength='12' />
            <br />
            <input type='email' placeholder='E-mail' id='email' name='email' maxLength='20'/>
            <br />
            <input type='password' placeholder='Senha' id='senha' name='senha' maxLength='7'/>
            <br />
            <button>Enviar</button>
        </form>
    </div>
)

    
}