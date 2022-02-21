const keys = [["Q","W","E","R","T","Y","U","I","O","P"], 
              ["A","S","D","F","G","H","J","K","L"," "],
              ["Z","X","C","V","B","N","M"," "," "," "]];

remoteControl("CAR");

function remoteControl(word) {

    const coord = [0,0]
    let row = 0;
    let column = 0;

    const userWord = Array.from(word);

    console.log(userWord)

    for (let i = 0; i < userWord.length; i++) {
        const userKey = userWord[i]   

        for (let j = 0; j < keys.length; j++) {
            row = keys.findIndex(indexRow => indexRow.includes(userKey));

            for (let k = 0; k < keys[row].length; k++) {
                column = keys[row].findIndex(indexColumn => indexColumn.includes(userKey));

            };

        };

        coord.push(row, column);

    };

    routeFinder(coord);

};

function routeFinder(coord) {

    var counter = 0;
    console.log(coord)
   
    for (i=0; i < coord.length -2 ; i++) {

            if (counter % 2 === 0) {

                if (coord[i] < coord[i+2]) {
                    for (let k=coord[i]; k < coord[i+2]; k++) {
                        console.log("down")
                    }
                } else if (coord[i] > coord[i+2]) {
                    for (let l=coord[i+2]; l < coord[i]; l++) {
                        console.log("up")
                    }
                } else {

                }

            } else {

                if (coord[i] < coord[i+2]) {
       
                    for (let j=coord[i]; j < coord[i+2]; j++) {
                        console.log("right")
                    }  
                } else if (coord[i] > coord[i+2]) {
     
                    for (let f=coord[i+2]; f < coord[i]; f++) {
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
