function start() {
    // document.getElementById("txt_august").innerHTML = "";
    // document.getElementById("txt_broch").innerHTML = "";

    let clock = 0;

    setInterval(animate, 100);

    function animate() {
        clock += 1;
    }
}

window.onload = start;