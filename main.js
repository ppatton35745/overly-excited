let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (sentence) {
    let buildMeUp = ""

    for (let i = 1; i <= sentence.length; i++) {
        if(i % 3 !== 0) {
            buildMeUp += (`${sentence[i - 1]} `);
        }
        else {
            let exclaimations = ""
            let j = i / 3;
            for (k = 0; k < j; k++) {
                exclaimations += "!";
            }
            buildMeUp += (`${sentence[i - 1]}${exclaimations} `);
        }
       
        console.log(buildMeUp);
    }

}

addExcitement(sentence);