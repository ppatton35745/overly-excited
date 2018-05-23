let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (sentence) {
    let buildMeUp = ""

    for (let i = 0; i < sentence.length; i++) {
        buildMeUp += (`${sentence[i]} `);
        console.log(buildMeUp);
    }

}

addExcitement(sentence);