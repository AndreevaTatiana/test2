function solve(s) {
    let objLetters = {
               a: 1,
               b: 2,
               c: 3,
               d: 4,
               e: 5,
               f: 6,
               g: 7,
               h: 8,
               i: 9,
               j: 10,
               k: 11,
               l: 12,
               m: 13,
               n: 14,
               o: 15,
               p: 16,
               q: 17,
               r: 18,
               s: 19,
               t: 20,
               u: 21,
               v: 22,
               w: 23,
               x: 24,
               y: 25,
               z: 26
    };
    let arrNotConsonants = ['a','e','i','o','u'];
    let arrStr = [];
    let index = 0; 
    let arrSum = [];

    for (let i=0; i<s.length;i++) {
        if (arrNotConsonants.includes(s[i])) {
            arrStr.push(s.slice(index, i));
            index = i+1;
        } 
        if (i == s.length-1 && arrNotConsonants.includes(s[i]) == false) {
            arrStr.push(s[i]);
        } 
    }
    
    for (let i=0; i<arrStr.length;i++) {
        let sum = 0;
        for (let j=0; j<arrStr[i].length;j++) {
            sum += objLetters[arrStr[i][j]]; 
        }
        arrSum.push(sum); 
    }

    function getMaxOfArray(numArray) {
        return Math.max.apply(null, numArray);
      }
    return getMaxOfArray(arrSum)
  };

  