
// let searchBooksArray = [];
// console.log(searchBooksArray)

// const query = (event) => {
//     const query = event.target.value
//     if (query.length < 3) {
//         filteredBooks = books;
//         return;
//       }
//      search()
//     .then(response => response.json())
//     .then(data => {
//         // console.log(data)

//         if (searchBooksArray.includes(query)){
//             return searchBooksArray
//         }
//         const book = data
//         let tempArray = []
//         const bookData = document.querySelector('.row')
//         bookData.innerHTML = ''

//         book.forEach(book => {
//             let books = document.createElement('div')
//             books.className = 'img-fluid'
//             books.innerHTML = `       
//             <div  class="card mb-3 mr-3 " style="width: 18rem;">
//             <img src="${book.img}" class="card-img-top" alt="..."style="width: 18rem; height:400px">
//             <div class="card-body" style=" height:110px">
//             <h5 id="clamp" class="card-title">${book.title}</h5>
//             <p class="card-text m-0"></p>
//             </div>
//             <div  class="d-flex justify-content-between">
//             <a href="#" class="btn btn-primary mb-1 ml-1"  onclick="addToCart(event, '${book.title}', '${book.img}', '€${book.price}' )" >€ ${book.price}</a>
//             <a href="#" class="btn btn-danger mb-1" onclick="skipBooks(event)" >Skip</a>
//             <div>
//           </div>`
//           bookData.appendChild(books)
//           tempArray.push(books)

//         }) 
//         filteredBooks = books.filter((book) =>
//         book.title.toLowerCase().includes(query.toLowerCase())
//       );
  
//       console.log(filteredBooks);
//       displayFilteredBooks(filteredBooks);
//     })
//     .catch(error => {
//       console.error(error)
//     })
// }

let filteredBooks = []


function search(query) {

    get()
    .then(response => response.json())
    .then(data => { 

           let books = data;
           filteredBooks=[]
           for (let i=0;i<books.length;i++){

               if(books[i].title.toLowerCase().includes(query.toLowerCase())){
                filteredBooks.push(books[i])
                console.log(filteredBooks)
    
               }
           }


        books.filter((book) =>
          console.log(book.title.toLowerCase().includes(query.toLowerCase()))
        );
        displayFilteredBooks(filteredBooks);
     })
 

    

    console.log(filteredBooks);
   
  }

 displayFilteredBooks = (books) => {
        let row = document.querySelector(".row")
        row.innerHTML = ""
        books.forEach((book) => {
            let img = book.img
            let col = document.createElement('div')
            col.classList = 'col-md-3'

            col.innerHTML= `       
            <div  class="card mb-3 mr-3 " style="width: 18rem;">
            <img src="${book.img}" class="card-img-top" alt="..."style="width: 18rem; height:400px">
            <div class="card-body" style=" height:110px">
            <h5 id="clamp" class="card-title">${book.title}</h5>
            <p class="card-text m-0">${book.category}</p>
            </div>
            <div  class="d-flex justify-content-between">
            <a href="#" class="btn btn-info mb-1 ml-1"  onclick="addToCart(event, '${book.title}', '${book.img}', '€${book.price}' )" >€ ${book.price}</a>
            <a href="#" class="btn btn-warning mb-1" onclick="skipBooks(event)" >Skip</a>
            <div>
          </div>`
          row.appendChild(col)
        })

 }  


function get() {
    return fetch("https://striveschool-api.herokuapp.com/books")
    
}

    

window.onload = () => {
    


//EX 1
    fetch("https://striveschool-api.herokuapp.com/books")

    .then(response => response.json())
    .then(data => {
        // console.log(data)

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
            <p class="card-text m-0">${book.category}</p>
            </div>
            <div  class="d-flex justify-content-between">
            <a  class="btn btn-info mb-1 ml-1"  onclick="addToCart(event, '${book.title}', '${book.img}', '€${book.price}' )" >€ ${book.price}</a>
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
const cartArray = []

const addToCart = (event, title, image, price) => {
    // console.log(event.target)
    let bookEvent = event.target.closest('.img-fluid')
    // bookEvent.remove()
    cartArray.push(bookEvent)
// We are pushing our books into the cartArrays[]    
    let cart = document.getElementById('cart')

    let books = document.createElement('a')
        books.className = 'dropdown-item'
        books.innerHTML = ` <div class="d-flex">
        <div>
        <a href="#" id="remove" class="dropdown-item"><span><img src="${image}" alt="" width="25"></span>
        <span>${title}</span><span class="ml-2" >${price}</span></a>
        </div>
        <div>
        <a href="#" class="btn btn-danger mt-1 cart-btn" onclick="removeFromCart(event)">Remove</a></span></a>
        </div>
        </div>
        `
        cart.appendChild(books)
 // We are filling and appending the book to our cartArrays
        bookCount() // Calls the bookCount function
        
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

        cartArray.filter(books => {
            if (cartArray.includes(event.target.value)){
                removeFromCart(books)
            }
        })
        

        bookCount()

           
 }

const bookCount = () => {
    if(cartArray.length > 0) {
        // console.log(cartArrays.length)
        let count = document.getElementById('count')
        count.innerHTML = `Current items in your cart  (${cartArray.length})`
    } else if (cartArray.length < 1){
        count.innerHTML = `Current items in your cart  (0)`
    }
}

// const resetCount = () => {
//         console.log(cartArrays.length)
//     if (cartArrays.length < 1) {
//         let count = document.getElementById('count')
//         count.innerHTML = `Current items in your cart  (0)`
//     } 
// }






















    