
var form = document.getElementById('my-form');
document.getElementById('form-imc').addEventListener("submit", function(e) {
    e.preventDefault(); 
    calculaImc();
});

function calculaImc(){
   
    let peso = parseFloat(document.getElementById('imcPeso').value);
    let altura =  parseFloat(document.getElementById('imcAltura').value);
    let idade = parseInt(document.getElementById('imcIdade').value);
    let selectNivelFisico = document.getElementById('imcNivelFisico');
    let nivelFisico = selectNivelFisico.options[selectNivelFisico.selectedIndex].value;

    let imc = (peso / Math.pow(altura, 2)).toFixed(2);
    
    let mensagem = 'Por favor, preencha os campos corretamente.'

    if(imc <= 17){
        mensagem = 'Sinto muito, seu IMC é de ' + imc + ' Kg/m2 ' + 'e você precisa ganhar peso.'

    } else if(imc > 17 && imc <= 18.49){
        mensagem = 'Sinto muito, seu IMC é de ' + imc + ' Kg/m2 ' + 'e você precisa ganhar peso.'

    } else if(imc > 18.5 && imc <= 24.99){
        mensagem = 'Parabéns, seu IMC é de ' + imc + ' Kg/m2 ' + 'e você está dentro do peso adequado!'

    } else if(imc > 25 && imc <= 29.99 && nivelFisico !== 'intenso'){
        mensagem = 'Sinto muito, seu IMC é de ' + imc + ' Kg/m2 ' + 'por isso você está acima do peso!'
    } else if(imc > 25 && imc <= 29.99 && nivelFisico !== 'intenso'){
        mensagem = 'Seu IMC indica ' + imc + ' Kg/m2 ' + ' mas como você pratica muita atividade fisíca, o seu peso pode ser devido aos músculos, o que é uma coisa boa.'
    } else if(imc > 30 && imc <= 34.99 && nivelFisico !== 'intenso'){
        mensagem = 'Sinto muito, seu IMC é de ' + imc + ' Kg/m2 ' + 'por isso você está acima do peso!'
    } else if(imc > 30 && imc <= 34.99 && nivelFisico !== 'intenso'){
        mensagem = 'Seu IMC indica ' + imc + ' Kg/m2 ' + 'mas como você pratica muita atividade fisíca, o seu peso pode ser devido aos músculos, o que é uma coisa boa.'
    } else if(imc > 35 && imc <= 34.99 && nivelFisico !== 'intenso'){
        mensagem = 'Sinto muito, seu IMC é de ' + imc + ' Kg/m2 ' + 'por isso você está acima do peso!'
    } else if(imc > 35 && imc <= 34.99 && nivelFisico !== 'intenso'){
        mensagem = 'Seu IMC indica ' + imc + ' Kg/m2 ' + 'mas como você pratica muita atividade fisíc, o seu peso pode ser devido aos músculos, o que é uma coisas boa.'
    } else if(imc > 40 && nivelFisico !== 'intenso'){
        mensagem = 'Sinto muito, seu IMC é de ' + imc + ' Kg/m2 ' + 'por isso você está acima do peso!'
    } else if(imc > 40 && nivelFisico !== 'intenso'){
        mensagem = 'Seu IMC indica ' + imc + ' Kg/m2 ' + ' mas como você pratica muita atividade fisíca, o seu peso pode ser devido aos músculos, o que é uma coisa boa.'
    }

    document.getElementById('mensagemFinal').innerHTML = mensagem;
}