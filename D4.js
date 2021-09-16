// EXERCISE 1 FETCH DATA
//    fetch("https://striveschool-api.herokuapp.com/books")

//      .then(response => response.json())
//      .then(data => console.log(data))




window.onload = () => {
    fetch("https://striveschool-api.herokuapp.com/books")

    .then(response => response.json())
    .then(data => {
        console.log(data)

        const book = data

        const bookData = document.querySelector('.row')
        bookData.innerHTML = ''

        book.forEach(book => {
            let books = document.createElement('div')
            books.classList.add('img-fluid')
            books.innerHTML = `       
            <div  class="card mb-3 mr-3 " style="width: 18rem;">
            <img src="${book.img}" class="card-img-top" alt="..."style="width: 18rem; height:440px">
            <div class="card-body">
            <h5 id="clamp" class="card-title">${book.title}</h5>
            <p class="card-text">${book.price} Euros</p>
            </div>
            <button class="btn btn-primary">Add to cart</button>
          </div>`
          bookData.appendChild(books)
        })
        

    })

    .catch(err => {
        console.log(err)
    })
}

let array = []

const removeElement = (e) => {
   e.target.closest(img-fluid).remove()

   let card = e.target.
}  