function isIsogram(str) {
    if (str == '') {
        return true
    }
    let newStr = str.toLowerCase();
    let set = new Set();
   for (let i=0; i < newStr.length; i++) {
    set.add(newStr[i])
   }
   if (str.length == set.size) {
       return true
   } 
   return false
  }


  