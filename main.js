const storageKey ='STORAGE_KEY';
const submitAction = document.getElementById('bookFormSubmit'); 
let data = []

submitAction.addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.querySelector("#inputBookTitle");
    const author = document.querySelector("#inputBookAuthor");
    const year = document.querySelector("#inputBookYear");
    const newData = {
        id: +new Date,
        title: title.value,
        author: author.value,
        year: year.value
    }

    console.log(newData);
    data.push(newData);
})
