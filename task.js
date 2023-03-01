let fontList = Array.from(document.querySelectorAll('.font-size'));
let fontSmall = document.querySelector('.font-size_small')
console.log(fontSmall);
let fontBig = document.querySelector('.font-size_big')
let book = document.querySelector('.book');
console.log(fontBig);


fontList.forEach(item => {
    item.addEventListener('click', function(event) {
         
        removeActiveFont(event.target);
               
        event.target.classList.add('font-size_active');
        event.preventDefault();

        if (event.target.classList.contains('font-size_active') && event.target.classList.contains('font-size_small')) {
            bookSmall();
        }

        if (event.target.classList.contains('font-size_active') && event.target.classList.contains('font-size_big')) {
            bookBig();            
        }

        if (event.target.dataset.size != 'big' &&  event.target.dataset.size != 'small') {
            book.className = 'book'
        }
        })
})

function removeActiveFont(current = null) {
    fontList.forEach(item => {
        if (item != current) {
            item.classList.remove('font-size_active');
        }
    })    
}

function bookSmall() {
    book.classList.remove('book_fs-big')
    book.classList.add('book_fs-small')
}

function bookBig() {
    book.classList.remove('book_fs-small') 
    book.classList.add('book_fs-big') 
}

/* function bookFont() {
    if (fontSmall.contains('font-size_active')) {
        return book.add('book_fs-small')
    }
    if (fontBig.contains('font-size_active')) {
        return book.add('book_fs-big')
    }
}

bookFont() */