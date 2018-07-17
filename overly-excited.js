// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (sentence) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = "";
    let wordCount = 0;

    for (let i = 0; i < sentence.length; i++) {
         wordCount ++;
        let currentWord = sentence[i];
        buildMeUp += " " + currentWord;

        if(wordCount % 3 === 0){
            buildMeUp += "!".repeat(wordCount/3)
        }
        console.log(buildMeUp)
    }
}

// Invoke the function and pass in the array
addExcitement(sentence)







