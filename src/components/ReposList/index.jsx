import { useEffect, useState } from "react";

import styles from './ReposList.module.css'

const ReposList = ({nomeUsuario})=>{
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true)

    //BUSCA O LINK DO GITHUB
    useEffect(() => {
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(resp => resp.json())
        .then(respJson => {
            setTimeout(()=>{
                setEstaCarregando(false);
                setRepos(respJson);
            }, 3000);
        })
    }, [nomeUsuario]);

    return(
        <div className="container">
            {/* Exibir mensagem carregando na TELA*/}
            {estaCarregando &&(
                <h1>Carregando...</h1>
            )}
            {/*Lista com as informações do GITHUB*/}
            <ul className={styles.list}>
            {repos.map(({id, name, language, html_url})=> (
                <li className={styles.listItem} key={id}>
                    <div className={styles.listName}>
                        <b>Nome: </b> {name} 
                        <br />
                    </div>
                    <div className={styles.listLanguage}>
                        <b>Linguagem: </b> {language} 
                        <br />
                    </div>
                    <div className={styles.listLink}>
                        <a target="_blank" href={html_url}>Visitar no GitHub</a>
                    </div>
                </li>
            ))}
            </ul>
        
        </div>
    )
}

export default ReposList;