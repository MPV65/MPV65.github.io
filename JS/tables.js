// JavaScript source code

// Global variables
/**
 * Array of cells for multiplication table.
 */
let mulTable = [];

/**
 * Indicates if highlight is set (number entry mode).
 */
let isSet = false;

/**
 * Current right-hand factor.
 */
let rVal = 1;

/**
 * Current left-hand factor.
 */
let lVal = 2;

/**
 * Number of correctly answered questions.
 */
let numCorrect = 0;

/**
 * Sets the highlighting of a block on mouse over.
 * @param {number} row Row number of table
 * @param {number} col Column number of table
 */
function highlight(row, col) {
    try {

        // Do not highlight if in number entry mode.
        if (isSet) return;

        // Set current factors
        lVal = row;
        rVal = col;

        // First remove any existing highlighting
        for (let i = 0; i < 12; i++) {
            for (let j = 0; j < 12; j++) {

                const cell = mulTable[i][j];

                cell.classList.remove("highlight");
                cell.classList.remove("set-block");
            }
        }

        // Add highlight
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {

                const cell = mulTable[i][j];

                cell.classList.add("highlight");
            }
        }

        if ((row === 0) || (col === 0)) {

            document.getElementById("equate-id").innerHTML = "&nbsp;";
            return
        }

        writeEquation(row, col);

    }
    catch (err) {

        console.error(err.message + " in highlight(row, col)");
    }
}

/**
 * Sets the fixed block highlight.
 * @param {number} row Row number of table
 * @param {number} col Column number of table
 */
function setHighlight(row, col) {
    try {

        // Set current factors
        lVal = row;
        rVal = col;

        // Add block highlight
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {

                const cell = mulTable[i][j];

                cell.classList.add("set-block");
            }
        }

    }
    catch (err) {

        console.error(err.message + " in setHighlight(row, col)");
    }
}

/**
 * Handels the keyDown event for numeric input.
 * @param {string} key The key pressed.
 */
function keyDown(key) {
    try {

        // Do not process if factors are not properly set
        if ((lVal < 1) || (lVal > 12) || (rVal < 1) || (rVal > 12)) return;

        // Only process numeric keys or backspace
        if (!(((key >= '0') && (key <= '9')) || (key === "Backspace"))) {
            return;
        }

        // Get current cell
        const current = mulTable[lVal - 1][rVal - 1];
        let val = current.innerHTML;

        if (key === "Backspace") {
            if (val.length > 0) {
                val = val.slice(0, val.length - 1);
            }             
        }
        else {
            if (val.length < 3) {
                val = val + key;
            }  
        }

        current.innerHTML = val;

        if (val.length > 0) {

            const num = parseInt(val);

            if (num === lVal * rVal) {

                current.classList.remove("incorrect");
            }
            else {

                current.classList.add("incorrect");
            }
        }
        else {
            // If blank remove incorrect
            current.classList.remove("incorrect");
        }

        writeEquation(lVal, rVal);


    }
    catch (err) {

        console.error(err.message + " in keyPress(key)");
    }
}

/**
 * Writes the top equation above the table.
 * @param {number} row Active row number of table
 * @param {number} col Active column number of table
 */
function writeEquation(row, col) {
    try {

        if ((row < 1) || (row > 12) || (col < 1) || (col > 12)) return;

        // Get current cell
        const current = mulTable[row - 1][col - 1];
        const val = current.innerHTML;

        let valStr = "";

        if (val.length > 0) {

            const num = parseInt(val);

            if (num === lVal * rVal) {

                valStr = valStr + val + "<span class=\"correct\">&nbsp;&nbsp;&#x2713;</span>";  
                
            }
            else {

                valStr = valStr + "<span class=\"incorrect\">" + val + "&nbsp;&nbsp;&#x2716;</span>";
            }

            checkNumCorrect();
        }

        // Change equation
        document.getElementById("equate-id").innerHTML = row.toString()
            + " &times; " + col.toString() + " = " + valStr;

    }
    catch (err) {

        console.error(err.message + " in writeEquation(row, col)");
    }
}


/**
 * Checks number of correct cells.
 */
function checkNumCorrect() {

    try {

        numCorrect = 0;

        for (let row = 1; row < 12; row++) {
            for (let col = 1; col < 12; col++) {

                const cell = mulTable[row][col];
                const val = cell.innerHTML;

                if (val.length === 0) continue;

                const num = parseInt(val);

                if ((row + 1) * (col + 1) === num) numCorrect++;

            }
        }

        document.getElementById("correct-id").innerHTML = "Correct: " + numCorrect.toString();

    }
    catch (err) {

        console.error(err.message + " in checkNumCorrect()");
    }
}

/**
 * Initialises the program.
 */
function init() {

    try {

        // Initialise table

        const table = document.getElementById("mul-table-id");

        for (let i = 1; i <= 12; i++) {

            // Create row
            const row = document.createElement("div");
            row.classList.add("table-row");

            // Create table row element
            let tableRow = [];

            for (let j = 1; j <= 12; j++) {

                const prod = i * j;

                // Create cell
                const cell = document.createElement("div");
                cell.classList.add("table-cell");

                // Highlight factors
                if ((i === 1) || (j === 1)) {
                    cell.classList.add("factor");
                    cell.innerHTML = prod.toString();
                }

                // Highlight squares
                if ((i > 1) && (i === j)) {
                    cell.classList.add("sqr");
                }

                // Add eventlistners
                cell.addEventListener("mouseover", () => {
                    highlight(i, j);
                });

                cell.addEventListener("mousedown", () => {
                    isSet = !isSet;
                    if (isSet) {
                        setHighlight(i, j);
                    }
                    else {
                        highlight(i, j);
                    }
                    
                });

                // Add table row cell
                tableRow[j - 1] = cell;

                row.appendChild(cell);
            }

            mulTable[i - 1] = tableRow;

            table.appendChild(row);

        }

        // When mouse leaves table
        table.addEventListener("mouseleave", () => {
            highlight(0, 0);
        });

        document.addEventListener("keydown", (e) => {
            keyDown(e.key);
        });

    }
    catch (err) {
        console.error(err.message + " in init()")
    }
}

init();
