function duplicateEncode(word){
    let newWord = word.toLowerCase();
    let arrWord = newWord.split('');
    let result='';
    
    for (let i=0;i<newWord.length; i++) {
        let  arr = arrWord.filter(item => item == newWord[i]);
        if (arr.length == 1) {
            result += '('
        } else {result += ')'} 
    }
   return result;
}

