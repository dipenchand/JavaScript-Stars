function hollowSquarePattern (n) {
    let string = ''
    for (let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if (i === 0 || i === n - 1) {
                string += '*'
            } else {
                if (j === 0 || j === n - 1) {
                    string += '*'
                } else {
                    string += ' '
                }
            }
        }
        string += ' \n'
    }
    console.log(string)
}

hollowSquarePattern(10)

function triangleStar(n) {
    let string = ''
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j < i + 1; j++) {
            string += '* '
        }
        string += ' \n'
    }
    console.log(string)
}

triangleStar(4)

function squareStar (n)
{
    let string = ''
    for (let i = 1; i <= n; i++){
        for (let j = 0; j < n; j++){
            string += ' *'
        }
        string += '\n'
    }
    console.log(string)
}

squareStar(3)
