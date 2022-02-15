
const keys = [["Q","W","E","R","T","Y","U","I","O","P"], 
              ["A","S","D","F","G","H","J","K","L"],
              ["Z","X","C","V","B","N","M"]];

remoteControl("CAR");

function remoteControl(word) {

    const positions = [0,0]
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

        positions.push(row, column);

    };

    moveToRow(positions);

};

function moveToRow(positions) {

    console.log(positions)

        for (let i=0; i < positions.length; i+=4) {

            for (let j=2; j < positions.length-1; j+=4 ) {
                console.log(positions[i] + "!" + positions[j] + "j")
                    
                    if (positions[i] < positions[j]) {
                        console.log(positions[i] + "!!" + positions[j] + "jj")
                        for (let k=0; k < positions[j]; k++) {
                            console.log("down ")
                        }
                    } else {
                        for (let l=0; l < positions[j]; l++) {
                            console.log("up")
                        }
                    }


            } 
        } 
        
};

  