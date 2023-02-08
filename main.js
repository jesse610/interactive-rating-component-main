let numBtns = document.querySelectorAll('.number')
let submitBtn = document.querySelector('#submit-btn')
let ratingContainer = document.querySelector('.rating-container')
let thankYouContainer = document.querySelector('.thank-you-container')
let selection = document.querySelector('#selection')
let error = document.querySelector('#error')
let numValue = 0;

numBtns.forEach(btn => {
    btn.addEventListener('click', getNum)
    btn.addEventListener('click', checkActive)
    btn.addEventListener('click', function() {
        this.classList.add('active')
    })
})

submitBtn.addEventListener('click', changeSection)

function changeSection() {
    if (numValue === 0) {
        error.textContent = 'Error! Please make a selection.'
    } else {
        ratingContainer.classList.add('remove')
        thankYouContainer.classList.remove('remove')
        selection.textContent = `You selected ${numValue} out of 5`
    }
}

function getNum() {
    numValue = this.value

}

function checkActive() {
    for (let i = 0; i < 5; i++) {
        if (numBtns[i].classList[1] == 'active') {
            numBtns[i].classList.remove('active')
        }
    }
}