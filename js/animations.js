/*Animação Arrow*/
function arrowHidden(){
    let seta = document.getElementsByClassName('setaBaixo')[0]
    seta.style.visibility = "hidden"
}
function arrowVisible(){
    let seta = document.getElementsByClassName('setaBaixo')[0]
    seta.style.visibility = "visible"
}
setInterval(arrowHidden,1000)
setInterval(arrowVisible,2000)


/*Animação scroll Header*/

function animateScrollHeader(){
    let body = document.querySelector('body')
    let conteudo = document.getElementsByClassName('headerConteudo')[0]
    body.addEventListener('scroll',function(){
        distanciaConteudoTop = conteudo.offsetTop
        distanciaBodyTop = body.scrollTop
        if(distanciaBodyTop>50){
            conteudo.style.opacity = "0.7"
        }
        if(distanciaBodyTop>90){
            conteudo.style.opacity = "0.6"
        }
        if(distanciaBodyTop>130){
            conteudo.style.opacity = "0.4"
        }
        if(distanciaBodyTop<50){
            conteudo.style.opacity = "1"
        }
    
})}

/*Animação Seções do site*/
function animateSection(){
    let divLinguagens = document.querySelectorAll('.divLinguagem')
    let body = document.querySelector('body')
    let divConhecimentos = document.querySelector('.divConhecimentos')

    divConhecimentos.style.visibility = "hidden"
    divLinguagens.forEach(function(value,index){
        value.style.visibility = "hidden"
    })

    body.addEventListener('scroll',function(){
        if(body.scrollTop > divLinguagens[0].offsetTop*4/5){
            divLinguagens.forEach(function(value,index){
                value.style.visibility = "visible"
            })
            divLinguagens[0].style.animation = "sectionAnimationRight 6s"
            divLinguagens[3].style.animation = "sectionAnimationRight 6s"
            divLinguagens[2].style.animation = "sectionAnimationLeft 6s"
            divLinguagens[5].style.animation = "sectionAnimationLeft 6s"
            divLinguagens[1].style.animation = "fadeIn 6s"
            divLinguagens[4].style.animation = "fadeIn 6s"
        }
        if(body.scrollTop > divConhecimentos.offsetTop*5/6){
            divConhecimentos.style.visibility = "visible"
            divConhecimentos.style.animation = "fadeIn 4s"
        }
    })
    
}