import React from "react";
import { useState } from "react";

function Ex6(){
    const [preco, setPreco]=useState(0)
    const [dia, setDia]=useState(0)
    const [resultado, setResultado]=useState(null)
    const [selectedOption, setSelectedOption] = useState('');
    const [errorCheck, setErrorCheck] = useState(false)
    
    function handleOptionChange(e){
        setSelectedOption(e.target.value);
    };
    function weekDecrease(day){
        switch (day) {
            case 2:
            case 3:
            case 5:
                return 0.6;
            case 4:
            case 6:
            case 7:
            case 1:
                return 1;
            default:
                return "Valor não mapeado";
            }
        }
        function handleSubmit(e) {
            e.preventDefault();
            setErrorCheck(false);
            if (dia>7 || dia<1){
                setResultado(null)
                setErrorCheck(true)
        }else {
            const increase = selectedOption === "Lançamento"?1.15:1;
            const desconto = weekDecrease(dia)
            const calculado = (desconto * preco) * increase
            setResultado(calculado);
        }
        
        // if (selectedOption === "Lançamento") {
        //      sesIncrease(1.15);
        // } else if (selectedOption === "Comum") {
        //      sesIncrease(1);
        // }
        // setResultado(calculado);
        // console.log(resultado);
    }
    return(
        <div>
            <div className="enunciado">
                <h1>Exercício 6</h1>
                <h2>Locadora de filmes.</h2>
                <br />
                <div className="d-flex">
                    <div className="col-3">
                        <h4>Regras de cobrança:</h4>
                        <ol>
                            <li>Seg, Ter, Qui desconto de 40%</li>
                            <li>Qua, Sex, Sab e Dom preço normal</li>
                            <li>Fitas comuns preço normal</li>
                            <li>Fitas lançamento 15% sobre preço</li>
                        </ol>
                    </div>
                    <div className="col-3">
                        <h4>Regras de construção:</h4>
                        <ol>
                            <li>Usar switch e if else</li>
                            <li>Aplicar acréscimo e depois desconto</li>
                            <li>Exibir Erro se dia ou categoria incorretos</li>
                        </ol>
                    </div>
                </div>
            </div>
            {errorCheck !== false ? <h2 className="alert alert-danger col-5 mx-5">Dia da semana incorreto!</h2>:
            resultado !== null && <h2 className="alert alert-info col-5 mx-5">O valor a ser pago é de R${resultado.toFixed(2)} </h2>}
            <form onSubmit={handleSubmit} className="p-2 container mx-5 row text-start col-6">
                <div className="my-3">
                    <label for='preco' className="form-label h5">Qual o preço do aluguel?</label>
                    <input 
                        type='number' 
                        id="preco" 
                        value={preco}
                        onChange={(e)=>setPreco(Number(e.target.value))}
                        required 
                        className="form-control my-2" name='preco'/>
                    <label for='dia' className="form-label h5 mt-3">Qual o dia da semana</label>
                    <p>Insira entre 1-Domingo até 7-Sabado</p>
                    <input 
                        type='number' 
                        id="dia" 
                        value={dia}
                        onChange={(e)=>setDia(Number(e.target.value))}
                        required 
                        className="form-control my-2" name='dia'/>
                    <h5> Selecione a categoria de filme:</h5>
                    <div class="form-check col-4">
                        <input
                            class="form-check-input"
                            type="radio"
                            value="Comum"
                            checked={selectedOption === 'Comum'}
                            onChange={handleOptionChange}
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                            Comum
                        </label>
                    </div>
                    <div class="form-check col-4">
                        <input
                            class="form-check-input"
                            type="radio"
                            value="Lançamento"
                            checked={selectedOption === 'Lançamento'}
                            onChange={handleOptionChange}
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                            Lançamento
                        </label>
                    </div>
                </div>

                <button className="btn btn-primary col-4" type="submit">Calcular</button>
            </form>
        </div>
    )
}

export default Ex6;