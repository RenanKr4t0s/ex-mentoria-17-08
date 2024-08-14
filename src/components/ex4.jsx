import React from "react";
import { useState } from "react";

function Ex4(){
    const [peso, setPeso] = useState(0);
    const [resultado, setResultado] = useState(null);

    function handleSubmit(e){
        e.preventDefault();
        const calculado = peso>50 ? (peso - 50)*4 : (null)
        setResultado(calculado)
    }

    return(
        <div>
            <div className="enunciado">
                <h1>Exercício 4</h1>
                <h2>Cálculo de multa por peso de peixes</h2>
                <br />
                <h4>Regras de negócio</h4>
                <p>Acima de 50 quilos multa de R$4,0 por quilo excedente</p>
                <br />
                <h4>Atividade</h4>
                <p>Criar aplicação que solicite o peso e retorne a multa ou sua ausência</p>
            </div>
            <form onSubmit={handleSubmit} className="p-2 container m-5 row text-start col-4">
                <label for='pesoInput' className="form-label">Insira em quilos o peso pescado</label>
                <input 
                    type='number' 
                    id="pesoInput" 
                    value={peso}
                    onChange={(e)=>setPeso(Number(e.target.value))}
                    required 
                    className="form-control my-2" name='peso'/>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
            {peso>0&& peso<=50 ? <h1>Para o peso de {peso} não há multa</h1>: 
            resultado !== null && <h1>A multa a ser paga é de R${resultado} </h1>}
        </div>
    )
}

export default Ex4;