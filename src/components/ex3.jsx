import "../assets/styles/exAll.css"
import "../assets/styles/ex3.css"

function Ex3(){
    //Código aqui
    return(
        <div>
            <div className="enunciado">
                <h1>Exercício 3</h1>
                <h2>Duas caixas que se comportarão diferente</h2>
                <ol>
                    <li>Ambas com largura de 200px, borda 4px e padding de 12px</li>
                    <li>Box sizing para a primeira div manter 200px sem acrécimo e que a segunda some o valor</li>
                </ol>
            </div>
            <div className="caixas caixa01"><h2>Primeira Caixa</h2></div>
            <div className="caixas caixa02"><h2>Segunda Caixa</h2></div>
        </div>
    )
}

export default Ex3;