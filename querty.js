
const keys = [["Q","W","E","R","T","Y","U","I","O","P"], 
              ["A","S","D","F","G","H","J","K","L"],
              ["Z","X","C","V","B","N","M"]];

remoteControl("XA");

function remoteControl(word) {

    const coord = [0,0,]
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

        coord.push(row, column);

    };

    routeFinder(coord);

};

function routeFinder(coord) {

    var move = 0;
    var counter = 0;
    console.log(coord)

    for (let i=0; i < coord.length; i++) {
        for (let j=2; j < coord.length; j++) {
            console.log(coord[i], coord[j])
            console.log(counter)
            if (counter % 2 === 0) {
                if (coord[i] < coord[j]) {
                    move = coord[i] + coord[j]
                    for (let k=0; k < move; k++) {
                        console.log("down")
                    }  
                } else if (coord[i] > coord[j]) {
                    move = coord[i] + coord[j]
                    for (let l=0; l < coord[j]; l++) {
                        console.log("up")
                    }
                } else {

                }

            } else {

                if (coord[i] < coord[j]) {
                    move = coord[i] + coord[j]
                    for (let k=0; k < move; k++) {
                        console.log("right")
                    }  
                } else if (coord[i] > coord[j]) {
                    move = coord[i] + coord[j]
                    for (let l=0; l < coord[j]; l++) {
                        console.log("left")
                    }
                } else {

                }

            }

            counter += 1;

        }

        
    } 
    
};

  