// EXERCISE 1 FETCH DATA
//    fetch("https://striveschool-api.herokuapp.com/books")

//      .then(response => response.json())
//      .then(data => console.log(data))


// function searchBooks(event) {
//     const query = event.target.value;
//     console.log(query)
//      search(query)
    
//      .then(response => response.json())
//      .then(data => {
//         // console logging the date of the search
        
//             const book = data
//         // container for dynamic images
//         const bookData = document.querySelector('.row')
//         bookData.innerHTML = ''

//         book.forEach(book => {
//             let books = document.createElement('div')
//             books.classList.add('img-fluid')
//             books.innerHTML = `       
//             <div  class="card mb-3 mr-3 " style="width: 18rem;">
//             <img src="${book.img}" class="card-img-top" alt="..."style="width: 18rem; height:440px">
//             <div class="card-body">
//             <h5 id="clamp" class="card-title">${book.title}</h5>
//             <p class="card-text">${book.price} Euros</p>
//             </div>
//             <button class="btn btn-primary onclick="${removeElement()}">Add to cart</button>
//           </div>`
//           bookData.appendChild(books)
//         })    
//      })
//      .catch(error => {
//        console.error(error)
//      })
//     }
    
//     function search(query) {
//       return fetch("https://striveschool-api.herokuapp.com/books" + query, {
//         headers: {
//           Authorization: apiKey,
//         },
//       })      
//     }

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
            <img src="${book.img}" class="card-img-top" alt="..."style="width: 18rem; height:440px">
            <div class="card-body">
            <h5 id="clamp" class="card-title">${book.title}</h5>
            <p class="card-text">${book.price} Euros</p>
            </div>
            <a href="#" class="btn btn-warning mb-1"  onclick="addToCart(event, '${book.title}', '${book.img}' )" >Add to cart</a>
            <a href="#" class="btn btn-warning" onclick="skipBooks(event)" >Skip</a>
          </div>`
          bookData.appendChild(books)
        })
        

    })

    .catch(err => {
        console.log(err)
    })
}

const cartArrays = []

const addToCart = (event, title, image) => {
    // console.log(event.target)
    let bookEvent = event.target.closest('.img-fluid')
    // bookEvent.remove()
    cartArrays.push(bookEvent)
    let cart = document.getElementById('cart')

    let books = document.createElement('a')
        books.style.color = 'blue'
        books.className = 'dropdown-item'
        books.innerHTML = ` <div class="d-flex">
        <a id="remove" class="dropdown-item" href="#"><span><img src="${image}" alt="" width="25">
        </span>${title}<span><a href="#" class="btn btn-warning mt-1 cart-btn" onclick="removeFromCart(event)">Remove</a></span></a>
        </div>
        `
        cart.appendChild(books)
 
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

















// const addBook = (e) => {
//     let list = document.querySelector('.img-fluid')
//     let col = e.target.closest('.card')
//     let title = e.target.closest('.card-body').querySelector('.card-text')
//     list.appendChild(title)
//     col.remove()
// }

    