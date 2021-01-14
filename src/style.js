let box1 = document.getElementById('me');
let ctop = 300;

let showMe = () => {
    ctop /= 1.03;
    if (ctop < 1) {
        ctop = 0;
    }
    box1.style.margin = `${70 - ctop}px auto 30px`;
}

let slowMe = setInterval(showMe, 10);

setTimeout("clearInterval(slowMe)", 2000)
