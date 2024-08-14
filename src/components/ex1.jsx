import "../assets/styles/exAll.css"
import "../assets/styles/ex1.css"

function Ex1(){
    //Código aqui
    return(
        <div>
            <div className="enunciado">
                <h1>Exercício 1</h1>
                <h2>3 Divs com as propriedades relacionadas abaixo</h2>
                <ol>
                    <li>Distantes da margem esquerda em 20px</li>
                    <li>Distancia entre a Div01 e 02 de 12px no eixo vertical</li>
                    <li>Distancia entre a Div02 e 03 de 4px no eixo vertical</li>
                    <li>Conteudo da Div01 centralizado no eixo x e y</li>
                    <li>Conteúdo da Div02 e Div03 deve estar distante do topo e da lateral esquerda 8px</li>
                </ol>
            </div>
            <div className="div-all div01"><h2>Div01</h2></div>
            <div className="div-all div02"><h2>Div02</h2></div>
            <div className="div-all div03"><h2>Div03</h2></div>
        </div>
    )
}

export default Ex1;
