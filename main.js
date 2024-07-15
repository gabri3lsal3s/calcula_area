let valores = [];
let resultado;
let button_cm = document.querySelector('#cm');
let button_m = document.querySelector('#m');
let button_km = document.querySelector('#km');
let forms_quadrado = document.querySelector('#quadrado');
let forms_circulo = document.querySelector('#circulo');
let forms_triangulo = document.querySelector('#triangulo');

addEventListener('submit', function(e){
    e.preventDefault();
})

button_cm.addEventListener('click', function(){
    const metrica = document.querySelector('#cm');
    metrica.classList.add('button-clicked');
})

forms_quadrado.addEventListener('submit', function(){
    let altura_ = document.querySelector('.altura_quadrado').value;
    let largura_ = document.querySelector('.largura_quadrado').value;
    resultado = altura_ * largura_;
    const mostra_resultado = document.querySelector('#resultado_quadrado')
    mostra_resultado.textContent = resultado + 'm²';    
})

forms_circulo.addEventListener('submit', function(){
    let raio_ = document.querySelector('.raio_circulo').value;
    resultado = 3.14 * (raio_ ** 2);
    const mostra_resultado = document.querySelector('#resultado_circulo')
    mostra_resultado.textContent = resultado + 'm²';    
})

forms_triangulo.addEventListener('submit', function(){
    let altura_ = document.querySelector('.altura_triangulo').value;
    let largura_ = document.querySelector('.largura_triangulo').value;
    resultado = (altura_ * largura_) / 2;
    const mostra_resultado = document.querySelector('#resultado_triangulo')
    mostra_resultado.textContent = resultado + 'm²';    
})

