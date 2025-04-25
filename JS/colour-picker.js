/**
 * Colour picker
 */

/*
 * Changes the colour of the box and the value in the edit box in accordance with the positions
 * of the sliders.
 */
function changeColour() {
    try {

        var red = document.getElementById("red-slider").value;
        var green = document.getElementById("green-slider").value;
        var blue = document.getElementById("blue-slider").value;

        var redhex = Math.abs(red).toString(16);
        if (redhex.length === 1) redhex = "0" + redhex;

        var greenhex = Math.abs(green).toString(16);
        if (greenhex.length === 1) greenhex = "0" + greenhex;

        var bluehex = Math.abs(blue).toString(16);
        if (bluehex.length === 1) bluehex = "0" + bluehex;

        var hex = "#" + redhex + greenhex + bluehex;

        document.getElementById("colour-box").style.backgroundColor = hex;

        document.getElementById("hex-box-id").value = hex;

    }
    catch (err) {
        console.error(err.message + " in changeColour()");
    }
}

/*
 * Changes the colour of the box and the positions of the sliders in accordance with the
 * value of the edit box.
 */
function editColour() {
    try {

        var hex = document.getElementById("hex-box-id").value;

        if (/^#[0-9A-F]{6}$/i.test(hex)) {

            document.getElementById("colour-box").style.backgroundColor = hex;
            hex = hex.substring(1, hex.length);

            var hexNum = parseInt(hex, 16);

            var red = Math.floor(hexNum / 65536)
            var green = Math.floor(hexNum / 256) % 256;
            var blue = hexNum % 256;

            document.getElementById("red-slider").value = red;
            document.getElementById("green-slider").value = green;
            document.getElementById("blue-slider").value = blue;

        }

    }
    catch (err) {
        console.error(err.message + " in editColour()");
    }
}

/**
 * Initialise colours randomly
 */
function init() {
    try {

        // Assign colours randomly
        document.getElementById("red-slider").value = Math.floor(256*Math.random());
        document.getElementById("green-slider").value = Math.floor(256 * Math.random());
        document.getElementById("blue-slider").value = Math.floor(256 * Math.random());

        changeColour();

        // Add event handlers
        // Called when red slider is changed
        document.getElementById("red-slider").addEventListener("input", changeColour);
        // Called when green slider is changed
        document.getElementById("green-slider").addEventListener("input", changeColour);
        // Called when blue slider is changed
        document.getElementById("blue-slider").addEventListener("input", changeColour);

        // Called when edit box is changed
        document.getElementById("hex-box-id").addEventListener("input", editColour);

    }
    catch (err) {
        console.error(err.message + " in init()");
    }
}


// Initialise
init();

