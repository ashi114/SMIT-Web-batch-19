let userName = ""
let teamSelected = ""
let coinSelected = ""

const nameWrapper = document.getElementById("name-wrapper");
const nameNextButton = nameWrapper.querySelector("button");
const nameInput = nameWrapper.querySelector("input");

const teamWrapper = document.getElementById("team-wrapper")
const teams = document.getElementsByClassName("team")

const tossWrapper = document.getElementById("toss-wrapper")
const coins = tossWrapper.getElementsByClassName("coin")

function getUsername() {
    const value = nameInput.value
    userName = value
    nameWrapper.remove()
    teamWrapper.classList.replace("none", "flex")
}

nameNextButton.addEventListener("click", getUsername)

for (let i = 0; i < teams.length; i++) {
    const team = teams[i]
    team.addEventListener("click", selectedTeam)
}

function selectedTeam(event) {
    teamSelected = event.target.innerText
    const isConfirm = confirm(`Are you sure you want to continue with ${teamSelected}`)
    if (isConfirm) proceedToNextPage();
}

function proceedToNextPage() {
    teamWrapper.remove()
    tossWrapper.classList.replace("none", "flex")
}

for (let i = 0; i < coins.length; i++) {
    const coin = coins[i]
    coin.addEventListener("click", selectedCoin)
}

function selectedCoin(event) {
    coinSelected = event.target.innerText
    let selectedSide = event.target.id
    const isConfirm = confirm(`Are you sure you want to continue with ${coinSelected}`)

    if (isConfirm) {
        const winningSide = generateCoinResult()
        const isUserWon = winningSide === selectedSide;
        if (isUserWon) {
            alert("Congrats you have won the toss")
        } else {
            alert("You fail to win the toss")
        }
    }
}


function generateCoinResult() {
    const random = Math.random();
    const side = Math.ceil(random * 2)
    return side.toString();
}