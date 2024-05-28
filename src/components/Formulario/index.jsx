import { useState, useEffect } from "react";

import styles from './Formulario.module.css'

const Formulario = () =>{
   const [inputAltura, setAltura] = useState('');
   const [inputPeso, setPeso] = useState('');
   const [imc, setIMC] = useState('');
   const [classificacao, setClassificacao] = useState('');

   useEffect(()=>{
    console.log('Formulário iniciado');

    return ()=>{
        console.log('Formulário finalizado')
    }
    
}, []);

    //CALCULAR O IMC
    const calcularIMC = (e)=>{
        e.preventDefault();

        const altura = parseFloat(inputAltura).toFixed(2);
        const peso = parseFloat(inputPeso);
        const imc = (peso / (altura * altura)).toFixed(2);

        setIMC(imc);

        if (imc < 18.5){
            setClassificacao('Abaixo do peso.');
        }else if (imc < 24.9){
            setClassificacao('Peso normal.');
        }else if (imc < 29.9){
            setClassificacao('Sobrepeso');
        }else if (imc < 34.9){
            setClassificacao('Obesidade grau 1');
        }else if (imc < 39.9){
            setClassificacao('Obesidade grau 2');
        }else {
            setClassificacao('Obesidade grau 3');
        }    
        console.log(inputAltura);
        console.log(inputPeso);
        console.log(imc); 
    };

    return(
        <div className="formulario">
            <form onSubmit={calcularIMC}>
                <label>
                    Altura (em metros):
                    <input type="number" step="0.01"  placeholder="Insira sua altura: " onChange={evento => setAltura(evento.target.value)}/>
                </label>
                <br />
                <label>
                    Peso (em kg):
                    <input type="number" step="0.01" placeholder="Insira seu peso: " onChange={evento => setPeso(evento.target.value)}/>
                </label>
                <button className="botao" type="submit">Calcular IMC</button>
            </form>

            {/*EXIBIR O CONTEÚDO NA TELA quando a variável for TRUE*/}
            {imc && (
                <div>
                    <h2>Seu IMC é {imc}</h2>
                    <h2>Classificação: {classificacao}</h2>
                </div>
            )}
        </div>
    );
};

export default Formulario;