let userName = ""
let teamSelected = ""
let coinSelected = ""
let isUserBatting = null
let totalWickets = 0
let target = 0
let totalScore = 0

const nameWrapper = document.getElementById("name-wrapper");
const nameNextButton = nameWrapper.querySelector("button");
const nameInput = nameWrapper.querySelector("input");

const teamWrapper = document.getElementById("team-wrapper")
const teams = document.getElementsByClassName("team")

const tossWrapper = document.getElementById("toss-wrapper")
const coins = tossWrapper.getElementsByClassName("coin")

const battingWrapper = document.getElementById("batting-selection-wrapper")
const battingOptions = battingWrapper.getElementsByClassName("batting-option")

const playWrapper = document.getElementById("play-wrapper")
const playButton = playWrapper.querySelector("#Play")
const teamEl = playWrapper.querySelector("#Team")
const nameEl = playWrapper.querySelector("#Name")
const typeEl = playWrapper.querySelector("#Type")
const wicketsEl = playWrapper.querySelector("#Wickets")
const scoreEl = playWrapper.querySelector("#Score")
const targetEl = playWrapper.querySelector("#Target")

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

function showAndUpdatePlay() {
    playWrapper.classList.replace("none", "block")
    teamEl.innerText = `${teamSelected} vs AI`
    nameEl.innerText = `${userName}`;

    if (isUserBatting) {
        type = "Batting"
    } else {
        type = "Bowling"
    }

    typeEl.innerText = `You're ${type}`
}

playButton.addEventListener("click", function () {
    document.addEventListener("keypress", playAttempt)
    playButton.remove()
})

const attemp = ["score", "wicket"]
const subAttempts = {
    score: [0, 1, 2, 3, 4, 5, 6],
    wicket: ["LBW", "Caught Behind", "Caught Out", "Bowled", "Run Out", "Stupms Out"]
}

function playAttempt(event) {
    const isSpacePressed = event.keyCode === 32
    if (!isSpacePressed) return
    // console.log("Space Pressed")

    const randomNumberForAttemp = Math.random()
    const parentAttempInd = Math.floor(randomNumberForAttemp * 2)
    const parentAttemp = attemp[parentAttempInd]
    const isScore = parentAttemp === "score"

    if (isScore) {
        updateScore()
    } else {
        updateWicket()
    }
}

function updateWicket() {
    // console.log(subAttempts.score)
    const wicketType = subAttempts.wicket
    const randomNumber = Math.random()
    const wicketIndex = Math.floor(randomNumber * wicketType.length)
    const wicket = wicketType[wicketIndex]
    alert(`Wicket ${wicket}`)
    totalWickets++
    wicketsEl.innerText = totalWickets

    if (totalWickets === 10) {
        if (isUserBatting) {
            alert(`You have lost all Wickets`);
            if (!target) {
                isUserBatting = false
                let target = totalScore + 1;
                targetEl.innerText = target;
                const type = "Bowling"
                typeEl.innerText = `You're ${type}`
            } else {
                alert(`You have lost the match`)
                document.removeEventListener("keypress", playAttempt)
            }
        } else {
            if (!target) {
                alert(`You have taken all the Wickets`)
                isUserBatting = true
                let target = totalScore + 1;
                targetEl.innerText = target;
                const type = "Batting"
                typeEl.innerText = `You're ${type}`
            } else {
                alert("You have won the match")
                document.removeEventListener("keypress", playAttempt)
            }
        }

        totalWickets = 0
        totalScore = 0
    }

}

function updateScore() {
    // console.log(subAttempts.score)
    const scoreType = subAttempts.score
    const randomNumber = Math.random()
    const scoreIndex = Math.floor(randomNumber * scoreType.length)
    const score = scoreType[scoreIndex]
    if (isUserBatting) {
        alert(`User has scored ${score}`)
    } else {
        alert(`AI has scored ${score}`)
    }

    totalScore += score
    scoreEl.innerText = totalScore

    if (target && totalScore >= target) {
        if (isUserBatting) {
            alert(`Hurray you have won the match`)
        } else {
            alert(`You can't even win from the computer`)
        }
        document.removeEventListener("keypress", playAttempt)
    }
}
