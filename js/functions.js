//Função para adicionar eventos a todas imagens
function getHeight(){
    return window.innerHeight
}  
function getWidth(){
    return window.innerWidth
}


function addEventImage(eventName,targets){
    targets.forEach((value,index)=>{
        value.addEventListener(eventName,e=>{
            e.preventDefault();
        })
    })
}

//Função para Visualizar Imagem
function openViewImage(){   
    let divImagens = document.querySelectorAll('.divProjeto a')
}

function openProjectView(currentDiv){
    
    let divProjeto = currentDiv
    let currentElement = currentDiv.children[2]
    currentElement.classList.remove('divHidden')

    divProjeto.addEventListener('mouseout',event=>{
        currentElement.classList.add('divHidden')
    })
}

function animateCircleBar(){
    //Distancia do elemento para top
    let distanciaDiv = $('.divAprendizados').position().top
    $('body').on('scroll',function(){
        let distanciaScroll = $('body').scrollTop()

        if(distanciaScroll>distanciaDiv*0.9){
            if(window.innerWidth>800){
                $(function() {
                    $('.chart').easyPieChart({
                        barColor: "green",
                        trackColor: "white",
                        scaleLength: 0,
                        lineWidth: 10,
                        size: 150,
                        animate: {
                            duration: 3500,
                            enabled: true
                        }
                    });
                });
            } 
            else{
                $(function() {
                    $('.chart').easyPieChart({
                        barColor: "green",
                        trackColor: "white",
                        scaleLength: 0,
                        lineWidth: 6,
                        size: 70,
                        animate: {
                            duration: 3500,
                            enabled: true
                        }
                    });
                });
        
            }   
        }
    })
   
    
  
    

    
  
}