let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (sentence) {
    let buildMeUp = ""

    for (let i = 1; i <= sentence.length; i++) {
        if(i % 3 !== 0) {
            buildMeUp += (`${sentence[i - 1]} `);
        }
        else {
            buildMeUp += (`${sentence[i - 1]}! `);
        }
       
        console.log(buildMeUp);
    }

}

addExcitement(sentence);