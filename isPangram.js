function isPangram(string){
    let arrLiter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let arr = string.split(' ');
    let str = arr.join('');
    if (str[str.length-1] == '.') {
      str = str.slice(0,-1);
    }
    str = str.toLowerCase();
    for (let i=0;i<str.length;i++) {
      arrLiter.splice(arrLiter.indexOf(str[i]),1)
    }
    if (arrLiter.length > 0) {return false}
    return true  
}




  