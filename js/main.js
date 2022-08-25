var totalClicks = 0;
var isXFirst = true; 
const X = 1;
const O = -1;
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