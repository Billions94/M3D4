// EXERCISE 1 FETCH DATA
//    fetch("https://striveschool-api.herokuapp.com/books")

//      .then(response => response.json())
//      .then(data => console.log(data))


function searchBooks(event) {
    const query = event.target.value;
    console.log(query)
     search()
    
     .then(response => response.json())
     .then(data => {
         console.log(data)
 
         const book = data
 
         const bookData = document.querySelector('.row')
         bookData.innerHTML = ''
 
         book.forEach(book => {
             let books = document.createElement('div')
             books.className = 'img-fluid'
             books.innerHTML = `       
             <div  class="card mb-3 mr-3 " style="width: 18rem;">
             <img src="${book.img}" class="card-img-top" alt="..."style="width: 18rem; height:400px">
             <div class="card-body" style=" height:110px">
             <h5 id="clamp" class="card-title">${book.title}</h5>
             <p class="card-text m-0"></p>
             </div>
             <div  class="d-flex justify-content-between">
             <a href="#" class="btn btn-warning mb-1">Add to cart</a>
             <a href="#" class="btn btn-warning mb-1">Skip</a>
             <div>
           </div>`
           bookData.appendChild(books)
         })   
     })
     .catch(error => {
       console.error(error)
     })
    }
    
    function search() {
      return fetch("https://striveschool-api.herokuapp.com/books")      
    }

    

window.onload = () => {
    // searchBooks()

    fetch("https://striveschool-api.herokuapp.com/books")

    .then(response => response.json())
    .then(data => {
        console.log(data)

        const book = data

        const bookData = document.querySelector('.row')
        bookData.innerHTML = ''

        book.forEach(book => {
            let books = document.createElement('div')
            books.className = 'img-fluid'
            books.innerHTML = `       
            <div  class="card mb-3 mr-3 " style="width: 18rem;">
            <img src="${book.img}" class="card-img-top" alt="..."style="width: 18rem; height:400px">
            <div class="card-body" style=" height:110px">
            <h5 id="clamp" class="card-title">${book.title}</h5>
            <p class="card-text m-0"></p>
            </div>
            <div  class="d-flex justify-content-between">
            <a href="#" class="btn btn-info mb-1 ml-1"  onclick="addToCart(event, '${book.title}', '${book.img}', '€${book.price}' )" >€ ${book.price}</a>
            <a href="#" class="btn btn-warning mb-1" onclick="skipBooks(event)" >Skip</a>
            <div>
          </div>`
          bookData.appendChild(books)
        })
        

    })

    .catch(err => {
        console.log(err)
    })
}

// Creating the cart, first we need an empty array where we store our books
const cartArrays = []

const addToCart = (event, title, image, price) => {
    // console.log(event.target)
    let bookEvent = event.target.closest('.img-fluid')
    // bookEvent.remove()
    cartArrays.push(bookEvent)
// We are pushing our books into the cartArrays[]    
    let cart = document.getElementById('cart')

    let books = document.createElement('a')
        books.className = 'dropdown-item'
        books.innerHTML = ` <div class="d-flex">
        <a href="#" id="remove" class="dropdown-item"><span><img src="${image}" alt="" width="25"></span>
        <span>${title}</span><span class="ml-2" >${price}</span></a>
        <a href="#" class="btn btn-danger mt-1 cart-btn" onclick="removeFromCart(event)">Remove</a></span></a>
        </div>
        `
        cart.appendChild(books)
 // We are filling and appending the book to our cartArrays
}

 const skipBooks = (event) => {
    // console.log(event.target)
    let skipBooks = event.target.closest('.img-fluid')
        skipBooks.remove()
 }

 const removeFromCart = (event) => {
    //  console.log(event.target)
     let removeFromCart = event.target.closest('.dropdown-item')
        removeFromCart.remove()
 }


const query = (event) => {
    console.log(event.target.value)
}















    