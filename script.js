const startBtn = document.querySelector('.action-btn');
const timeInput = document.querySelector('.time-input');
const timerText = document.querySelector('.timer-text');
const timerSpan = document.querySelector('.counter');
const shapePaths = [
    { path: "polygon(50% 0%, 0% 100%, 100% 100%)",                                                                          color: "#e74c3c" },
    { path: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",                                                                  color: "#e67e22" },
    { path: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",                                                color: "#f1c40f" },
    { path: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",                                                        color: "#2ecc71" },
    { path: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",                             color: "#3498db" },
    { path: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",             color: "#9b59b6" },
    { path: "polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)",                                       color: "#1abc9c" },
    { path: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",                                                                  color: "#e91e63" },
    { path: "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",                                     color: "#00bcd4" },
    { path: "circle(50% at 50% 50%)",                                                                                        color: "#8bc34a" }
];

function spawnShape() {
    const gameArea = document.getElementById('game-area');
    gameArea.innerHTML = "";

    const randomIndex = Math.floor(Math.random() * shapePaths.length);
    const shape = shapePaths[randomIndex];

    const div = document.createElement('div');
    div.className = 'shape-item';
    div.style.position = "absolute";
    div.style.left = Math.floor(Math.random() * 400) + "px";
    div.style.top = Math.floor(Math.random() * 400) + "px";
    div.style.width = Math.floor(Math.random() * 10) + 40 + "px";
    div.style.height = Math.floor(Math.random() * 10) + 40 + "px";
    div.style.clipPath = shape.path;
    div.style.backgroundColor = shape.color;

    div.addEventListener("click", function() {
        score++;
        spawnShape();
    });

    gameArea.appendChild(div);
}


function initGame(){
    let time = parseInt(timeInput.value);
    if (isNaN(time) || time <= 0) return;
    score = 0
    timerSpan.innerHTML = time;
    startBtn.disabled = true;
    spawnShape();

    let timer = setInterval(() => {
        time--;
        timerSpan.innerHTML = time;
        if (time <= 0) {
            clearInterval(timer);
            document.getElementById('game-area').innerHTML = `<h2 class="game-over">ВЫ НАБРАЛИ ${score}</h2>`;

            startBtn.disabled = false;
        }
    }, 1000);
}

startBtn.addEventListener('click', initGame);
