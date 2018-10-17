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