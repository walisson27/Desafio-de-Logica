function onlyNumberKey(evt) {
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}

function validateInputNumber(value) {
    if (value >= 10 && value <= 40) {
        return true;
    }
    alert('Insira um valor entre 10 e 40')
    return false;
}

function renderLine(n) {
    var array = new Array(n).fill('#')
    var string = ''

    array.map(e => string = string + e)
    console.log(string)
}

function renderString(n, caracter) {
    var string = ''
    if (n < 0) {
        n = 0
    }

    var array = new Array(n).fill(caracter)
    array.map(e => string = string + e)

    return string
}

function renderTimeLine(n, column, seg) {

    if (column >= (n / 2)) {
        return
    }


    var string = ''
    var hashString = renderString((n - (column * 2) - 4), '#')
    var spaceString = renderString(column, ' ')
    var spaceCenterString = renderString((n - (column * 2) - 4), ' ')

    if (column >= ((n - 1) / 2) - 1) {
        console.log("#" + spaceString + '#' + spaceString + '#')
        return
    }
    if (column < seg) {
        console.log("#" + spaceString + '#' + spaceCenterString + '#' + spaceString + '#')
        return
    }

    string = "#" + spaceString + '#' + hashString + '#' + spaceString + '#'
    console.log(string)
}

function renderDecTimeLine(n, column, seg) {
    if (column >= (n / 2)) {
        return
    }

    var spaceCenterString = renderString((n - (column * 2) - 2), ' ')
    var spaceString = renderString(column - 1, ' ')
    var hashString = renderString(((n - (column * 2) - 2)), '#')
    if ((n / 2) - 2 == column) {
        if (n % 2 == 0) {
            console.log("#" + spaceString + ' ## ' + spaceString + '#\n')
        }
        else {

        }
    }
    if (column < seg) {
        console.log("#" + spaceString + '#' + hashString + '#' + spaceString + '#')
        return
    }


    console.log("#" + spaceString + '#' + spaceCenterString + '#' + spaceString + '#')
}

function showHourglass(n, seg) {
    let column = 0;

    renderLine(n)
    while (column <= (n / 2) - 1) {
        if (column != (n / 2) - 1) {
            renderTimeLine(n, column, seg)
        }
        column = column + 1
    }
    column = 0;

    while (column < (n / 2) - 1) {
        if (((n / 2) - 1) - column != (n / 2) - 1) {
            var valueColumn = 0;

            if (n % 2 != 0) {
                valueColumn = (((n / 2) - 1) - column) + 0.5;
            }
            else {
                valueColumn = (((n / 2) - 1) - column);
            }
            renderDecTimeLine(n, valueColumn, seg)
        }

        column = column + 1;
    }
    renderLine(n)
}

function setTime(n) {
    var count = 0;

    var interval = setInterval(() => {
        if (count < n / 2) {
            console.clear();
            showHourglass(n, count);
            count = count + 1;
        }
        else {
            clearInterval(interval);
        }
    }, 1000)


}

function onClickButton() {
    var inputValue = document.querySelector("#input").value;
    if (validateInputNumber(inputValue)) {
        setTime(parseInt(inputValue))
    }
}
