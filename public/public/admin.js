async function main() {

     let response = await fetch ('http://127.0.0.1:3001/listBooks')
     let books = await response.json()

     books.forEach(renderBook)
}

function renderBook(book) {
    let mainSection = document.querySelector('#mainSection')

    let li = document.createElement('li')
    li.textContent = book.title

    let quantityInput = document.createElement('input')
    quantityInput.value = book.quantityInput

    let saveButton = document.createElement('button')
    saveButton.textContent = 'Save & Update',
    saveButton.style.color = 'blue',
    saveButton.style.backgroundColor = 'yellow',

    saveButton.addEventListener('click', function(){
        fetch('http://127.0.0.1:3001/updateBook',{
            method: 'PATCH',
            headers:{
                'Content-Type': 'appliccation/json'
            },
            body: JSON.stringify({
                id: book.id,
                quantity: quantityInput.value
            })

        })

    })
    liappend(quantityInput, saveButton)

    mainSection.append(li)

}
main();

// Your Code Here
