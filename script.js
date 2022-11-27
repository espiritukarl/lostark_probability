let myContent = document.querySelector(".result");
let currentChance = document.querySelector(".current")
let input = document.querySelector("input");
let button = document.querySelector("button")
let i = 0;
let array = [];

let n = input.value;

function myFunction() {
    let x = 1 - n;
    if (x == n * 2) x = n * 2;
    else x = x - n * i * 0.1;
    i += 1;

    array.push(x)
    let result = (1 - array.reduce((a, b) => a * b, 1))

    currentChance.textContent = x * 100 + '%';
    myContent.textContent = 'Attempt #' + i + ': ' + (result * 100).toFixed(2) + '%';
}

input.addEventListener('input', () => {
    n = input.value / 100;
    array = []
    i = 0;
});

function setStyle(translate, color) {
    button.style.transform = translate;
    button.style.backgroundColor = color;
}

function removeStyle(i) {
    setTimeout(function () {
        setStyle('translateY(-2px)', '#ffffff');
        if (--i) removeStyle(i);
    }, 110)
};

input.addEventListener("keyup", ({ key }) => {
    if (key === "Enter") {
        myFunction();
        setStyle('translateY(2px)', '#3e7b8e');
        removeStyle(1);
    }
})

button.onclick = () => {
    myFunction();
    setStyle('translateY(2px)', '#3e7b8e');
    removeStyle(1);
};


