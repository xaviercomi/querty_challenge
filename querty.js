
const keys = [["Q","W","E","R","T","Y","U","I","O","P"], 
              ["A","S","D","F","G","H","J","K","L"],
              ["Z","X","C","V","B","N","M"]];

remoteControl("BOB");

function remoteControl(word) {

    const positions = [[0, 0]]
    let row = 0;
    let column = 0;

    const userWord = Array.from(word);

    console.log(userWord)

    for (let i = 0; i < userWord.length; i++) {
        const userKey = userWord[i]
        console.log(userKey + "  letter from the user word")      

        for (let j = 0; j < keys.length; j++) {
            row = keys.findIndex(indexRow => indexRow.includes(userKey));

            for (let k = 0; k < keys[row].length; k++) {
               column = keys[row].findIndex(indexColumn => indexColumn.includes(userKey))

            };

        };

        positions.push([row, column]);

    };

    calcRoute(positions);

};

function calcRoute(positions) {

    console.log(positions)
    

};

  