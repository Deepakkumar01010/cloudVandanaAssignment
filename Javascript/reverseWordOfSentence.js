function reverseWord(word){
    return word.split("").reverse().join("");
}

function reverseStringWords(sentence){
    let reversedSentence = "";
    let currWord = "";
    for(let i=0;i<sentence.length;i++){
        if(sentence[i]===" "){
            reversedSentence+=reverseWord(currWord);
            currWord="";
            if(i!==sentence.length-1){
                reversedSentence+=" ";
            }
        }
        else if(i===sentence.length-1){
            currWord+=sentence[i];
            reversedSentence+=" ";
            reversedSentence+=reverseWord(currWord);
            currWord="";
        }
        else{
            currWord+=sentence[i];
        }
    }
    return reversedSentence;
}

const Sentence = "Hello, my name is Deepak kumar";
console.log(reverseStringWords(Sentence));
