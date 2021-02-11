"use strict"

NixionBackCard.style.display = 'none'
McGovernBackCard.style.display = 'none'
mistake_div.style.display = 'none'
correct_div.style.display = 'none'
voting_Wrapper.style.display = 'none'

getStarted.addEventListener('click', function voteTrans() {
    voting_Wrapper.style.display = 'unset'
    getStarted.style.display = 'none'
        // getStarted.style.transform = "rotate(20deg)";
})


Nixion_Card.addEventListener("mouseover", function playHoverEffect() {
    NixionBackCard.style.display = 'unset'
    NixonFrountCard.style.display = 'none'
});

McGovern.addEventListener("mouseover", function playHoverEffect() {
    McGovernBackCard.style.display = 'unset'
    McGovernFrountCard.style.display = 'none'

});

Nixion_Card.addEventListener('mouseout', function notHover() {
    NixionBackCard.style.display = 'none'
    NixonFrountCard.style.display = 'unset'
})

McGovern.addEventListener('mouseout', function notHover() {
    McGovernBackCard.style.display = 'none'
    McGovernFrountCard.style.display = 'unset'
})

vote_McGovern.addEventListener('click', function startVoting() {
    mistake_div.style.display = 'unset'
    Nixion_Card.style.display = 'none'
    McGovern.style.display = 'none'
    title.style.display = 'none'

    if (Nixion_Card.style.display == 'none' && McGovern.style.display == 'none') {
        html.addEventListener('contextmenu', function goBack(e) {
            mistake_div.style.display = 'none'
            Nixion_Card.style.display = 'unset'
            McGovern.style.display = 'unset'
            title.style.display = 'unset'
            e.preventDefault();
        })
    }
})

vote_Nixion.addEventListener('click', function votingForTheRightGuy() {
    mistake_div.style.display = 'none'
    McGovern.style.display = 'none'
    Nixion_Card.style.display = 'none'
    title.style.display = 'none'
    correct_div.style.display = 'unset'
    html.addEventListener('contextmenu', function noRightClickMenu(element) {
        element.preventDefault()
    })
});
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
// little tic tac toe game the user can play when they are done voting

let playerTurn = 1

// let playerValues = {
//     playerOne: 'X',
//     playerTwo: 'Y'
// }

let smallTicTacBox = []


let bigTicTacBox = []

function click() {
    if (this.innerHTML == '' || this.innerHTML == 'Y') {
        this.innerHTML = 'X'
    }
}

function rightClick() {
    if (this.innerHTML == '' || this.innerHTML == 'X') {
        this.innerHTML = 'Y'
        bigTicTacBox.push(this.innerHTML)
    }
}

console.log(smallTicTacBox)
console.log(bigTicTacBox)


// Game someone can't play with. Used for the person to ptry to match with.

let randomLetter = ['X', 'Y']

for (let i = 0; i < 9; i++) {
    let matchGrid = document.createElement('div')
    matchGrid.addEventListener('click', click)
    matchGrid.innerHTML = randomLetter[Math.floor(Math.random() * randomLetter.length)]
    smallTicTacBox.push(matchGrid.innerHTML)
    match.appendChild(matchGrid)
}
// Game someone can play with
for (let i = 0; i < 9; i++) {
    let gridBox = document.createElement('div')
    gridBox.addEventListener('click', click)
    gridBox.addEventListener('contextmenu', rightClick)
    game.appendChild(gridBox)
}

done.addEventListener('click', function checkDone() {
    for (let i = 0; i < game.length; i++) {
        bigTicTacBox.push(gridBox[i].innerHTML);
    }
    if (bigTicTacBox == smallTicTacBox) {
        McGovern.style.display = 'unset'
        Nixion_Card.style.display = 'unset'
        mistake_div.style.display = ' none'
        title.style.display = 'unset'
        correct_div.style.display = 'none'
    }
})