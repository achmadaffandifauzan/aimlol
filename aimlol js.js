function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let totalClick = 0;
let totalHit = 0;
body = document.querySelector("#main")
body.addEventListener("mousedown", function () {
    totalClick += 1;
    //document.querySelector("#numAccur").innerHTML -= parseInt(100 / totalClick);
    document.querySelector("#numAccur").innerHTML = parseInt(totalHit / totalClick * 100)
})
let mepet = 20;
circleA = document.querySelector("#circleA")
circleB = document.querySelector("#circleB")
circleC = document.querySelector("#circleC")

circleA.addEventListener("mousedown", function () {
    totalClick += 1;
    totalHit += 1;
    document.querySelector("#numAccur").innerHTML = parseInt(totalHit / totalClick * 100);
    circleA.style.left = getRandomInt(20, 80) + '%'
    circleA.style.top = getRandomInt(20, 80) + '%'
    circleA.style.width = getRandomInt(40, 90) + 'px'
    circleA.style.height = circleA.style.width
    while ((Math.abs(parseInt(circleA.style.top) -
        parseInt(circleB.style.top)) < mepet &&
        Math.abs(parseInt(circleA.style.left) -
            parseInt(circleB.style.left)) < mepet) ||
        (Math.abs(parseInt(circleA.style.top) -
            parseInt(circleC.style.top)) < mepet &&
            Math.abs(parseInt(circleA.style.left) -
                parseInt(circleC.style.left)) < mepet)) {
        circleA.style.top = getRandomInt(20, 80) + '%'
        circleA.style.left = getRandomInt(20, 80) + '%'
    }

})

circleB.addEventListener("mousedown", function () {
    totalClick += 1;
    totalHit += 1;
    document.querySelector("#numAccur").innerHTML = parseInt(totalHit / totalClick * 100);
    circleB.style.left = getRandomInt(20, 80) + '%'
    circleB.style.top = getRandomInt(20, 80) + '%'
    circleB.style.width = getRandomInt(40, 90) + 'px'
    circleB.style.height = circleB.style.width
    while ((Math.abs(parseInt(circleB.style.top) -
        parseInt(circleA.style.top)) < mepet &&
        Math.abs(parseInt(circleB.style.left) -
            parseInt(circleA.style.left)) < mepet) ||
        (Math.abs(parseInt(circleB.style.top) -
            parseInt(circleC.style.top)) < mepet &&
            Math.abs(parseInt(circleB.style.left) -
                parseInt(circleC.style.left)) < mepet)) {
        circleB.style.top = getRandomInt(20, 80) + '%'
        circleB.style.left = getRandomInt(20, 80) + '%'
    }
})

circleC.addEventListener("mousedown", function () {
    totalClick += 1;
    totalHit += 1;
    document.querySelector("#numAccur").innerHTML = parseInt(totalHit / totalClick * 100);
    circleC.style.left = getRandomInt(20, 80) + '%'
    circleC.style.top = getRandomInt(20, 80) + '%'
    circleC.style.width = getRandomInt(40, 90) + 'px'
    circleC.style.height = circleC.style.width
    while ((Math.abs(parseInt(circleC.style.top) -
        parseInt(circleA.style.top)) < mepet &&
        Math.abs(parseInt(circleC.style.left) -
            parseInt(circleA.style.left)) < mepet) ||
        (Math.abs(parseInt(circleC.style.top) -
            parseInt(circleB.style.top)) < mepet &&
            Math.abs(parseInt(circleC.style.left) -
                parseInt(circleB.style.left)) < mepet)) {
        circleC.style.top = getRandomInt(20, 80) + '%'
        circleC.style.left = getRandomInt(20, 80) + '%'
    }
})
/*
let circ1 = document.querySelector("svg #circle1")
circ1.addEventListener("click", function () {
    circ1.setAttribute("cx", getRandomInt(300, 900))
    circ1.setAttribute("cy", getRandomInt(50, 400))
    circ1.setAttribute("r", getRandomInt(20, 50))
})

let circ2 = document.querySelector("svg #circle2")
circ2.addEventListener("click", function () {
    circ2.setAttribute("cx", getRandomInt(300, 900))
    circ2.setAttribute("cy", getRandomInt(50, 400))
    circ2.setAttribute("r", getRandomInt(20, 50))
})

let circ3 = document.querySelector("svg #circle3")
circ3.addEventListener("click", function () {
    circ3.setAttribute("cx", getRandomInt(300, 900))
    circ3.setAttribute("cy", getRandomInt(50, 400))
    circ3.setAttribute("r", getRandomInt(20, 50))
})
*/
