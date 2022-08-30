var totalClicks = 0;
var isXFirst = true; 
const X = 1;
const O = -1;
var computerPlay = X;
var results = [0,0,0,0,0,0,0,0,0];

function disableAllButtons() {
    for (let i = 1; i <=9; i++) {
        document.getElementById("btn" + i).disabled = true;
    }
}

function playAgain() {
    for (let i = 1; i <=9; i++) {
        var btn = document.getElementById("btn" + i);

        btn.disabled = false;
        btn.style.backgroundColor = "#8affeb";
        btn.innerText = "";
        btn.style.opacity = 1; 
    }

    results = [0,0,0,0,0,0,0,0,0];
    totalClicks = 0;
    document.getElementById("result").textContent = "";

    isXFirst = !isXFirst;

    if (! isXFirst) {
        playerXPosition();
    }
}

function updateButtonStyle(btn, btnIndex) {
    btn.style.backgroundColor = "#cafff2";
    btn.style.opacity = 0.6;

    totalClicks = totalClicks + 1;

    btn.innerText = (isXFirst == (totalClicks % 2 === 0))? "X" : "O";
    results[btnIndex] = (isXFirst == (totalClicks % 2 === 0))? X : O;

    btn.disabled = true;
    if (totalClicks > 4) {
        gameStatus = checkBoard(results);

        //console.log(gameStatus);
        if (gameStatus["result"]) {
            document.getElementById("result").textContent = gameStatus["result"]
            disableAllButtons(); 
        }
    }

    if (results[btnIndex] != computerPlay){
        playerXPosition();
    }
}

function addButtons() { 
    var myButtonHolder = document.getElementById("allButtons");

    for (let i = 1; i <= 9; i++) {
        let btn = document.createElement("button");
        btn.id = "btn" + i;
        btn.className = "button";
        btn.onclick = function() { updateButtonStyle(btn, i - 1 ); };
        //btn.innerHTML = "";

        myButtonHolder.appendChild(btn);
    }
}

addButtons();

function playerXPosition() {
    // X will always be computer 

    // get list of available position
    var availablePositions = []
    for (let i = 0; i < results.length; i++) {
        if (results[i] == 0) {
            availablePositions.push(i + 1);
        }
    }

    //console.log(availablePositions);

    // pick a random position from it
    if (availablePositions.length > 0) {
        const randomIndex = Math.floor(Math.random() * availablePositions.length);
        const randomPostion = availablePositions[randomIndex];

        // play at that position
        document.getElementById("btn" + randomPostion).click();
    }
    
}
