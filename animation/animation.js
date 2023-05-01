function random_bool() {
    let seed = Math.random();
    if (seed < .5) {
        return false;
    } else {
        return true;
    }
}

/* Return random number between 0 and given range. F. example, if the range is 5 you can get numbers including 0 and 5. */
function random_num(range) {
    return Math.floor(Math.random() * range + 1);
}

function start() {
    let clock = 0; // Keeping track of steps in the animation

    /* Arrays containing my first- and lastname */
    const first_name = ["A", "u", "g", "u", "s", "t"];
    const last_name = ["B", "r", "o", "c", "h"];
    /* -then with inverted small and capital letters */
    const first_name_capinvert = ["a", "U", "G", "U", "S", "T"];
    const last_name_capinvert = ["b", "R", "O", "C", "H"];
    /* Array index for first- and lastname character to replace with the correct one */
    let first_name_replace = [0, 1, 2, 3, 4, 5];
    let last_name_replace = [0, 1, 2, 3, 4];

    /* Running clock */
    setInterval(animate, 50);

    /* Var for html-text to be displayed in DOM element */
    let HTML_firstname = [];
    let HTML_lastname = [];

    /* Variable for the HTML DOM elements we are working with */
    let DOM_firstname = document.getElementById("txt_august");
    let DOM_lastname = document.getElementById("txt_broch");

    /* Function doing the animations */
    function animate() {
        /* First animation: Print out my first and lastname, with random small/capital letters */
        if (clock < 6) {
            if (random_bool() === false) {
                HTML_firstname.push(first_name[clock]);
            } else {
                HTML_firstname.push(first_name_capinvert[clock]);
            }

            if (clock < 5) { // Lastname array only has 5 characters
                if (random_bool() === false) {
                    HTML_lastname.push(last_name[clock]);
                } else {
                    HTML_lastname.push(last_name_capinvert[clock]);
                }
            }

            // Print array as string without commas
            DOM_firstname.innerHTML = HTML_firstname.join("");
            DOM_lastname.innerHTML = HTML_lastname.join("");
        }

        /* Second animation: Add slashes after the firstname */
        else if (clock < 8) {
            if (clock === 6) {
                HTML_firstname.push(" /");
            } else {
                HTML_firstname.push("/");
            }

            DOM_firstname.innerHTML = HTML_firstname.join("");
        }

        /* Third animation: Remove firstname special characters */
        else if (clock < 9) {
            HTML_firstname.splice(-2);
            DOM_firstname.innerHTML = HTML_firstname.join("");
        }

        // Fourth animation: Replace small/capital letters correctly one by one letter in first- and lastname
        else if (clock < 15) {
            // Pick random element from the firstname replace array
            firstname_index = random_num(first_name_replace.length) - 1;
            
            
            // Troubleshooting
            /* console.log("clock: " + clock);
            console.log("firstname_index: " + firstname_index);
            console.log("first_name_replace: " + first_name_replace);
            console.log("first_name_character: " + first_name[first_name_replace[firstname_index]]);
            console.log("First name HTML:" + HTML_firstname);
            console.log("======================================="); */

            // Replace letter with the correct one
            HTML_firstname.splice(first_name_replace[firstname_index], 1, first_name[first_name_replace[firstname_index]]);

            // Output updated HTML text
            DOM_firstname.innerHTML = HTML_firstname.join("");

            // Remove replaced character from character-replace array
            first_name_replace.splice(firstname_index, 1);
            
            if (clock < 14) { // Lastname only has 5 characters. Do the same as for firstname
                lastname_index = random_num(last_name_replace.length) - 1;

                console.log("clock: " + clock);
                console.log("lastname_index: " + lastname_index);
                console.log("last_name_replace: " + last_name_replace);
                console.log("last_name_character: " + last_name[last_name_replace[lastname_index]]);
                console.log("Last name HTML:" + HTML_lastname);
                console.log("=======================================");
                console.log(0);

                HTML_lastname.splice(last_name_replace[lastname_index], 1, last_name[last_name_replace[lastname_index]]);

                DOM_lastname.innerHTML = HTML_lastname.join("");

                last_name_replace.splice(lastname_index, 1);
            }
        } else {
            window.location = "home.html";
        }

        clock += 1;
    }
}

window.onload = start;