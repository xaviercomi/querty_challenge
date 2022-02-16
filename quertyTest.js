const keys = [["Q","W","E","R","T","Y","U","I","O","P"], 
              ["A","S","D","F","G","H","J","K","L"," "],
              ["Z","X","C","V","B","N","M"," "," "," "]];

remoteControl("PLM");

function remoteControl(word) {

    const coord = [0,0]
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

    for (let i=0; i < coord.length -2 ; i++) {
            console.log(coord[i], coord[i + 2])
            console.log(counter)
            if (counter % 2 === 0) {
                if (coord[i] < coord[i + 2]) {
                    move = coord[i] + coord[i + 2]
                    for (let k=0; k <= coord[i]; k++) {
                        console.log("down")
                    }
                  
                } else if (coord[i] > coord[i + 2]) {
                    move = coord[i] - coord[i + 2]
                    for (let l=0; l <= coord[i]; l++) {
                        console.log("up")
                    }
                } else {

                }

            } else {

                if (coord[i] < coord[i + 2]) {
                    move = coord[i] + coord[i + 2]
                    for (let k=0; k < coord[i + 2]; k++) {
                        console.log("right")
                    }  
                } else if (coord[i] > coord[i + 2]) {
                    move = coord[i] - coord[i + 2]
                    for (let l=0; l < coord[i + 2]; l++) {
                        console.log("left")
                    }
                } else {

                }

            }

            counter += 1;
            if (counter % 2 === 0)
            console.log("enter")
        
    } 
    
};
