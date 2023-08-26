const results = document.getElementById("results")
const submitBtn = document.querySelector(".submit")
const input = document.getElementById("num-inp")


const randomNumber = Math.floor(Math.random() * 5) + 1


submitBtn.addEventListener("click", () => {
    const userGuess = parseInt(input.value)
    
    if (userGuess === randomNumber) {
        results.textContent = "you guessed correctly"
        submitBtn.disabled = true
    
    } 
    else if (userGuess > randomNumber) {
        results.textContent = "your guess was too high"
    }
    
    else {
        results.textContent + "your guess was too low"
    }
})


