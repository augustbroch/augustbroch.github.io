function random_bool() {
    let seed = Math.random();
    if (seed < .5) {
        return false;
    } else {
        return true;
    }
}

function start() {
    // document.getElementById("txt_august").innerHTML = "";
    // document.getElementById("txt_broch").innerHTML = "";

    let clock = 0; // Keeping track of steps in the animation

    /* Arrays containing my first- and lastname */
    const first_name = ["A", "u", "g", "u", "s", "t"];
    const last_name = ["B", "r", "o", "c", "h"];
    /* -then with inverted small and capital letters */
    const first_name_capinvert = ["a", "U", "G", "U", "S", "T"];
    const last_name_capinvert = ["b", "R", "O", "C", "H"];

    /* Running clock */
    setInterval(animate, 50);

    /* Variable for the HTML DOM elements we are working with */
    let DOM_firstname = document.getElementById("txt_august");
    let DOM_lastname = document.getElementById("txt_broch");

    /* Function doing the animations */
    function animate() {
        /* First animation: Print out my first and lastname, with random small/capital letters */
        if (clock < 6) {
            if (random_bool() === false) {
                DOM_firstname.append(first_name[clock]);
            } else {
                DOM_firstname.append(first_name_capinvert[clock]);
            }

            if (clock < 5) { // Lastname array only has 5 characters
                if (random_bool() === false) {
                    DOM_lastname.append(last_name[clock]);
                }
                else {
                    DOM_lastname.append(last_name_capinvert[clock]);
                }
            }
        }

        /* Second animation: Add slashes after the firstname */
        else if (clock < 8) {
            if (clock === 6) {
                DOM_firstname.append(" /");
            } else {
                DOM_firstname.append("/");
            }
        }

        /* Third animation: Remove firstname special characters */
        else if (clock < 9) {
            DOM_firstname.removeChild(DOM_firstname.lastChild);
            DOM_firstname.removeChild(DOM_firstname.lastChild);
        }

        /* Fourth animation: Ripple-effect (Randomly 3 and 3 characters with correct or inverted chars) */
        else if (clock < 100) {

        } else {
            window.location = "index.html";
        }

        clock += 1;
    }
}

window.onload = start;