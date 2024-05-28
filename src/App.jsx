import Perfil from './components/Perfil'
import Formulario from './components/Formulario';
import ReposList from './components/ReposList';

import { useState } from 'react';

function App() {
    const [formularioEstaVisivel, setFormulario] = useState(false);
    const [repositorioEstaVisivel, setRepositorio] = useState(false);
    const [nomeUsuario, setNomeUsuario] = useState('');

    return(
        <div className='container'>
            <h1>Calcule seu IMC e acesse um repositório no GitHub</h1> <br /><br /><br />
        {nomeUsuario.length > 4 &&(
            <Perfil nomeUsuario={nomeUsuario}/>

        )}
        <p className='texto'>
            O Índice de Massa Corporal (IMC) é uma medida usada para avaliar se uma pessoa está dentro do peso ideal. É calculado dividindo o peso (em kg) pela altura ao quadrado (em metros). O IMC ajuda a identificar obesidade ou desnutrição em adultos. Clique abaixo e descubra o seu. 
        </p>
        {formularioEstaVisivel &&(
            <Formulario />
        )}

        <button className='botao' onClick={()=> setFormulario(!formularioEstaVisivel)}>Exibir IMC</button> <br />
        <br /><br />
        <p className='texto2'>
        O GitHub é uma plataforma de hospedagem de código-fonte com controle de versão usando o Git. Ele permite que programadores, utilitários e organizações colaborem em projetos. Os usuários podem contribuir para projetos de outros, criar seus próprios ou fazer fork de projetos existentes. Digite o nome do usuário GitHub e acesse ao seu repositório:
        </p>
        <br />
        <br />
        <label>
            <b>Digite o nome de usuário:</b> <br />
            <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)}/>
        </label>

        {repositorioEstaVisivel &&(
            <ReposList nomeUsuario={nomeUsuario}/>
        )}
        <br /> <button className='botao' onClick={()=> setRepositorio(!repositorioEstaVisivel) }>Exibir Repositórios GitHub</button>

        </div>
    );
};

export default App
