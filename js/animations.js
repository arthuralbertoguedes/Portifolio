
/*Animação scroll Header*/

function animateScrollHeader(){
    let body = document.querySelector('body')
    let conteudo = document.getElementsByClassName('headerConteudo')[0]
    let navTop = document.getElementsByClassName('navTop')[0]
    let linksMenu = document.querySelectorAll('#menuSuperior li a')
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

        /*Animação Menu Superior*/
        if( window.innerWidth>678){
            conteudo.style.height = "100%"
            if(distanciaBodyTop>70){
                navTop.classList.add('navTopFixed')
                
                linksMenu.forEach((value)=>{
                    value.classList.add('textBlack')
                })
            }
            else{
                navTop.classList.remove('navTopFixed')
                linksMenu.forEach((value)=>{
                value.classList.remove('textBlack')
                })
            }
        }
        else{
            conteudo.style.height = "93%"
        }
       
})}

/*Animação Seções do site*/
function animateSection(){
    let divLinguagens = document.querySelectorAll('.divLinguagem')
    let body = document.querySelector('body')
    let divConhecimentos = document.querySelector('.divConhecimentos')
    let divProjetos = document.querySelectorAll('.divProjeto')
    
    /*Aplicando hidden ás divs*/
    divProjetos.forEach(function(value,index){
        value.style.visibility = "hidden"
    })

    divConhecimentos.style.visibility = "hidden"
    divLinguagens.forEach(function(value,index){
        value.style.visibility = "hidden"
    })

    /*Aplicando animaçoes na posição exata do scroll*/
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
        if(body.scrollTop > divProjetos[0].offsetTop*1/3){
            divProjetos[0].style.visibility = "visible"
            divProjetos[0].style.animation = "sectionAnimationLeft 4s"
        }
        if(body.scrollTop > divProjetos[1].offsetTop*2/3){
            divProjetos[1].style.visibility = "visible"
            divProjetos[1].style.animation = "sectionAnimationRight 4s"
        }       
        if(body.scrollTop > divProjetos[2].offsetTop*5/6){
            divProjetos[2].style.visibility = "visible"
            divProjetos[2].style.animation = "sectionAnimationLeft 4s"
        }   
        if(body.scrollTop > divProjetos[3].offsetTop*5/6){
            divProjetos[3].style.visibility = "visible"
            divProjetos[3].style.animation = "sectionAnimationRight 4s"
        }   
        if(body.scrollTop > divProjetos[4].offsetTop*5/6){
            divProjetos[4].style.visibility = "visible"
            divProjetos[4].style.animation = "sectionAnimationLeft 4s"
        }   
        if(body.scrollTop > divProjetos[5].offsetTop*5/6){
            divProjetos[5].style.visibility = "visible"
            divProjetos[5].style.animation = "sectionAnimationRight 4s"
        }   
    })
    
}

function animateHeaderConteudo(){
    let arrayParagrafos = document.querySelectorAll('.headerConteudo p')
    
    
    arrayParagrafos[0].style.animation = "animationTop 2s"
    arrayParagrafos[1].style.visibility = "hidden"
    arrayParagrafos[2].style.visibility = "hidden"
    setTimeout(function(){
        arrayParagrafos[1].style.visibility = "visible"
        arrayParagrafos[1].style.animation = "animationLeft 3s"
    },2000)
    setTimeout(function(){
        arrayParagrafos[2].style.visibility = "visible"
        arrayParagrafos[2].style.animation = "animationRight 3s"
    },5000)
}

