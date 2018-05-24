let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
let aBetterSentence = ["This", "is", "one", "of", "the", "BEST", "sentences", "that", "I", "have", "ever", "written"];

let addExcitement = (sentence, punctuation) => {
    let buildMeUp = ""

    for (let i = 1; i <= sentence.length; i++) {
        if (i % 3 !== 0) {
            buildMeUp += (`${sentence[i - 1]} `);
        } else {
            let exclaimations = ""
            let j = i / 3;

            for (k = 0; k < j; k++) {
                exclaimations += punctuation;
            }

            buildMeUp += (`${sentence[i - 1]}${exclaimations} `);
        }

        console.log(buildMeUp);
    }

}

addExcitement(aBetterSentence, "*");