let result;
let i = 0;
let metric_value = document.querySelector('#m').textContent;
let metric = document.querySelector('header nav');
let forms_quadrado = document.querySelector('#quadrado');
let forms_circulo = document.querySelector('#circulo');
let forms_triangulo = document.querySelector('#triangulo');

addEventListener('submit', function(e){
    e.preventDefault();
    i++
    i_()
})

metric.addEventListener('click', function(){
    const cm = document.getElementById('cm');
    const m = document.getElementById('m');
    const km = document.getElementById('km');
    i++
    i_()

    document.getElementById('cm').addEventListener('click', function(){
        this.classList.add('clicked_btn');
        metric_value = document.querySelector('#cm').textContent
        while (m.classList.contains('clicked_btn') || km.classList.contains('clicked_btn')) {
            document.getElementById('m').classList.remove('clicked_btn');
            document.getElementById('km').classList.remove('clicked_btn');
        }
    })
    document.getElementById('m').addEventListener('click', function(){
        this.classList.add('clicked_btn');
        metric_value = document.querySelector('#m').textContent
        while (cm.classList.contains('clicked_btn') || km.classList.contains('clicked_btn')) {
            document.getElementById('cm').classList.remove('clicked_btn');
            document.getElementById('km').classList.remove('clicked_btn');
        }
    })
    document.getElementById('km').addEventListener('click', function(){
        this.classList.add('clicked_btn');
        metric_value = document.querySelector('#km').textContent
        while (cm.classList.contains('clicked_btn') || m.classList.contains('clicked_btn')) {
            document.getElementById('cm').classList.remove('clicked_btn');
            document.getElementById('m').classList.remove('clicked_btn');
        }
    })
})

forms_quadrado.addEventListener('submit', function(){
    let altura_ = document.querySelector('.altura_quadrado').value;
    let largura_ = document.querySelector('.largura_quadrado').value;
    result = altura_ * largura_;
    const mostra_resultado = document.querySelector('#resultado_quadrado')
    mostra_resultado.textContent = result + metric_value;    
})

forms_circulo.addEventListener('submit', function(){
    let raio_ = document.querySelector('.raio_circulo').value;
    result = 3.14 * (raio_ ** 2);
    const mostra_resultado = document.querySelector('#resultado_circulo')
    mostra_resultado.textContent = result + metric_value;    
})

forms_triangulo.addEventListener('submit', function(){
    let altura_ = document.querySelector('.altura_triangulo').value;
    let largura_ = document.querySelector('.largura_triangulo').value;
    result = (altura_ * largura_) / 2;
    const mostra_resultado = document.querySelector('#resultado_triangulo')
    mostra_resultado.textContent = result + metric_value;
})


const video = document.querySelector('#video')
const i_ = function () {
    if(i>=10) {
        document.querySelector('.i').classList.remove('i');
        window.scrollTo({
            top: document.body.scrollHeight,
        });
        video.play()
    }
    video.addEventListener('ended', function () {
        i = 0;
        this.classList.add('i');
    })
}