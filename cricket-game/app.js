let userName = ""
let teamSelected = ""
let coinSelected = ""
let isUserBatting = null

const nameWrapper = document.getElementById("name-wrapper");
const nameNextButton = nameWrapper.querySelector("button");
const nameInput = nameWrapper.querySelector("input");

const teamWrapper = document.getElementById("team-wrapper")
const teams = document.getElementsByClassName("team")

const tossWrapper = document.getElementById("toss-wrapper")
const coins = tossWrapper.getElementsByClassName("coin")

const battingWrapper = document.getElementById("batting-selection-wrapper")
const battingOptions = battingWrapper.getElementsByClassName("batting-option")

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
            proceedToNextPageAfterCoinSelection()
        } else {
            alert("You fail to win the toss")
            autoBattingBowlingSelection()
        }
    }
}


function generateCoinResult() {
    const random = Math.random();
    const side = Math.ceil(random * 2)
    return side.toString();
}

function generateCoinResult() {
    const random = Math.random();
    const side = Math.ceil(random * 2)
    return side.toString();
}

function proceedToNextPageAfterCoinSelection() {
    tossWrapper.remove()
    battingWrapper.classList.replace("none", "flex")
};

for (let i = 0; i < battingOptions.length; i++) {
    const battingOption = battingOptions[i]
    battingOption.addEventListener("click", selectedOption)
}

function selectedOption(event) {
    userOptionSelected = event.target.innerText;
    userOptionId = event.target.id;
    const isConfirm = confirm(`Are you sure you want to ${userOptionSelected}`);

    if (!isConfirm) return;

    if (userOptionId === "Batting") {
        isUserBatting = true;
    } else {
        isUserBatting = false
    }

    battingWrapper.remove()
    showAndUpdatePlay();
}


function autoBattingBowlingSelection() {
    const randomNumber = Math.random();
    const selectedSide = Math.ceil(randomNumber * 2);

    if (selectedSide === 1) {
        isUserBatting = false
    } else {
        isUserBatting = True
    }

    tossWrapper.remove();
    showAndUpdatePlay();
}

function showAndUpdatePlay(){
    
}
