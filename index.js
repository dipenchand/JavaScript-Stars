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
