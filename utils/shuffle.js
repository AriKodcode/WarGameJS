

export default function shuffle(deck){

    let count = 0;

    while(count <= 1000){

        let index1 = Math.floor(Math.random() * 52);
        let index2 = Math.floor(Math.random() * 52);

        if (index1 !== index2){

            let temp = deck[index1];
            deck[index1] = deck[index2];
            deck[index2] = deck[temp];

            count ++

        };

    return deck;

    };

};