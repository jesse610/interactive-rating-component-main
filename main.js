let form = document.querySelector('#form')
let ratings = document.getElementsByName('rating')
let numLabel = document.querySelectorAll('.number-label')
let submitBtn = document.querySelector('#submit-btn')
let ratingContainer = document.querySelector('.rating-container')
let thankYouContainer = document.querySelector('.thank-you-container')
let selection = document.querySelector('#selection')
let error = document.querySelector('#error')

numLabel.forEach(label => {
    label.addEventListener('click', checkActive)
    label.addEventListener('click', function() {
        label.classList.add('active')
    })
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let rating = form.rating.value;
    if (rating === '') {
        error.textContent = 'Error! Please make a selection.'
    } else {
        selection.textContent = `You selected ${rating} out of 5`;
        ratingContainer.classList.add('remove')
        thankYouContainer.classList.remove('remove')
    }
})


function checkActive() {
    for (let i = 0; i < 5; i++) {
        if (numLabel[i].classList[1] == 'active') {
            numLabel[i].classList.remove('active')
        }
    }
}