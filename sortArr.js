function sortArray(array) {
    let arrOdd=[];
    let arrResult = [];
    let j=0;
    function isOdd(num) {
        if (num%2 != 0) {
            return true
        } 
        return false
    }

    function func(num1, num2) {
        if (num1 < num2) {
            return -1;
        }
        
        if (num1 > num2) {
            return 1;
        }
        
        return 0;
    }
    array.forEach((elem,index) => {
        if (isOdd(elem)) {
            arrOdd.push(elem);
        } 
    });
    
    arrOdd.sort(func);
    console.log(`arrOdd: ${arrOdd}`);
    for (let i=0;i<array.length;i++) {
        if (isOdd(array[i])) {
            //если нечет
            arrResult.push(arrOdd[j]);
            j++;
        } else {
            arrResult.push(array[i]);
        }
    }
    return  arrResult
}

    

  


console.log(sortArray([1, 11, 2, 8, 3, 4, 5]));  //1, 3, 2, 8, 5, 4, 11 
console.log(sortArray([-6, -1, -11, -13, 20, -27, -24, 3, -20, 33, -8])); // -6, -27, -13, -11, 20, -1, -24, 3, -20, 33, -8
