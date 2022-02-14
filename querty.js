
    const keys = [new Array(2);]
    keys [0] = new Array(2);
    keys [1] = new Array(2);
    keys [2] = new Array(2);

    keys[0][0] = "Q"
    keys[0][1] = "W"
    keys[0][2] = "E"
    keys[0][3] = "R"
    keys[0][4] = "T"
    keys[0][5] = "Y"
    keys[0][6] = "U"
    keys[0][7] = "I"
    keys[0][8] = "O"
    keys[0][9] = "P"
    keys[1][0] = "A"
    keys[1][1] = "S"
    keys[1][2] = "D"
    keys[1][3] = "F"
    keys[1][4] = "G"
    keys[1][5] = "H"
    keys[1][6] = "J"
    keys[1][7] = "K"
    keys[1][8] = "L"
    keys[1][9] = ""
    keys[2][0] = "Z"
    keys[2][1] = "X"
    keys[2][2] = "C"
    keys[2][3] = "V"
    keys[2][4] = "B"
    keys[2][5] = "N"
    keys[2][6] = "M"
    keys[2][7] = ""
    keys[2][8] = ""
    keys[2][9] = ""

function remoteControl(word) {
    const userWord = Array.from(word);
    console.log(userWord)
    for (let i = 0; i < userWord.length; i++) {
        const userKey = userWord[i]
        console.log(userKey)
        for (let j = 0; j < keys.length; j++) {
            for(let k = 0; k < keys[i].length; k++) {
                for (let l = 0; keys[i][k].length; l++) {
                    const position = keys[j][k]
                    console.log(position)
                }
            }
        }
        
   }
};


remoteControl("CAR");