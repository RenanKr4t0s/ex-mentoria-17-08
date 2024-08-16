import React from "react";
import { useState } from "react";

function Ex5(){

        const [selectedOption, setSelectedOption] = useState('');
        const [consumo, setConsumo] = useState(0);
        const [resultado, setResultado] = useState(null);
      
        const handleOptionChange = (e) => {
          setSelectedOption(e.target.value);
        };

        function residencialCalc(){
            let calculado = 5 + (0.05*consumo)
            return calculado
        }
        function comercialCalc(){
            let calculado = 0
            consumo<80? calculado = 500 : calculado = ((consumo-80)*0.25)+500
            return calculado
        }
        function industrialCalc(){
            let calculado = 0
            consumo<100? calculado = 800 : calculado = ((consumo-100)*0.04)+800
            return calculado
        }

        const handleSubmit = (e) => {
          e.preventDefault();
          selectedOption === 'Residencial'? setResultado(residencialCalc()) : 
          selectedOption === 'Comercial'? setResultado(comercialCalc()) :
          selectedOption === 'Industrial' && setResultado(industrialCalc())
        };
    return(
        <div>
            <div className="enunciado">
                <h1>Exercício 5</h1>
                <h2>Consumo de água por m³.</h2>
                <br />
                <h4>Regras de cobrança:</h4>
                <ol>
                    <li>Residencial: R$5,00 de taxa mais R$0,05 por m³ gastos no total;</li>
                    <li>Comercial: R$500,00 para os primeiros 80 m³ gastos mais R$0,25 por m³ gastos além dos 80 m³;</li>
                    <li>Industrial: R$800,00 para os primeiros 100 m³ gastos mais R$0,04 por m³ gastos além dos 100 m³;</li>
                </ol>
            </div>
            {resultado !== null && <h1 className="alert alert-info col-5 mx-5">O valor a ser pago é de R${resultado.toFixed(2)} </h1>}
            <form onSubmit={handleSubmit} className="p-2 container mx-5 row text-start col-6">
                <h5> Selecione o tipo de propriedade:</h5>
                <div class="form-check col-4">
                    <input
                        class="form-check-input"
                        type="radio"
                        value="Residencial"
                        checked={selectedOption === 'Residencial'}
                        onChange={handleOptionChange}
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                        Residencial
                    </label>
                </div>
                <div class="form-check col-4">
                    <input
                        class="form-check-input"
                        type="radio"
                        value="Comercial"
                        checked={selectedOption === 'Comercial'}
                        onChange={handleOptionChange}
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                        Comercial
                    </label>
                </div>
                <div class="form-check col-4">
                    <input
                        class="form-check-input"
                        type="radio"
                        value="Industrial"
                        checked={selectedOption === 'Industrial'}
                        onChange={handleOptionChange}
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                        Industrial
                    </label>
                </div>
                <div className="my-3">
                    <label for='consumo' className="form-label h5">Insira o consumo de água em m³</label>
                    <input 
                        type='number' 
                        id="consumo" 
                        value={consumo}
                        onChange={(e)=>setConsumo(Number(e.target.value))}
                        required 
                        className="form-control my-2" name='peso'/>
                </div>

                <button className="btn btn-primary col-4" type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Ex5;