//Procurar o botão
document.querySelector("#add-time")
//Quando clicar no botão
.addEventListener('click', cloneField)


//Executar uma ação 
function cloneField(){
    //Duplicar os campos. que campos? 
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)//boolean
    
    
    //Pegar os campos.Que campos?
    const Fields = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpar

    Fields.forEach(function(field) {
        //pegar o field do momento e limpar ele 
        field.value=""
    })

    //Colocar na página. Onde na página?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
   