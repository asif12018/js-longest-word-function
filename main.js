function longWord(string){
    let wordlengthArray = [];
     let wordSplit = string.split(' ');
     for(let i = 0; i < wordSplit.length; i++){
         wordlengthArray.push(wordSplit[i].length);
         
         
     }
     let longLength = Math.max(...wordlengthArray);
     let wordIndexNumber = wordlengthArray.indexOf(longLength);
     let largestWord = wordSplit[wordIndexNumber];
     return largestWord;
}

let result = longWord('how are you baby');
console.log(result);
